import base64

from odoo import http
from odoo.http import request


class OfficeConvertController(http.Controller):
    @http.route("/preview-msoffice/<int:attachment_id>", auth="user")
    def convert_pdf_attachment(self, attachment_id):
        Attachment = request.env["ir.attachment"].sudo()
        attachment = Attachment.browse(attachment_id)

        headers = [
            ("Content-Type", "application/pdf"),
            ("Content-Disposition", 'inline; filename="converted_attachment.pdf"'),
        ]

        if not attachment.exists() or not attachment.datas:
            return request.make_response(
                "Attachment not found or empty.",
                headers=[("Content-Type", "text/plain")],
            )
        try:
            attachment_bytes = base64.b64decode(attachment.datas)
            pdf_data = request.env["converter.msoffice2pdf"].convert_msoffice2pdf(
                binary_data=attachment_bytes, filename=attachment.name
            )
            return request.make_response(
                pdf_data, headers=headers + [("Content-Length", str(len(pdf_data)))]
            )
        except Exception as e:
            return request.make_response(
                f"Error preview attachment: {str(e)}",
                headers=[("Content-Type", "text/plain")],
            )
