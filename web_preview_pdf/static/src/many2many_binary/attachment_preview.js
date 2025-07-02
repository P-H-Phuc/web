/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { Many2ManyBinaryField } from "@web/views/fields/many2many_binary/many2many_binary_field";

patch(
    Many2ManyBinaryField.prototype,
    "web_preview_pdf.AttachmentPreview",
    {
        isPdfDocument(file) {
            return file.mimetype === "application/pdf";
        },

        isImageDocument(file) {
            return file.mimetype.startsWith("image/");
        },

        isPreviewable(file) {
            return this.isPdfDocument(file) || this.isImageDocument(file) || this._super.apply(this, arguments);
        }
    }
);
