import logging
import os
import tempfile

from odoo import models

_logger = logging.getLogger(__name__)

try:
    from msoffice2pdf import convert
except (OSError, ImportError) as err:
    _logger.debug(err)


class ConverterOffice2PDF(models.AbstractModel):
    _name = "converter.msoffice2pdf"

    def convert_msoffice2pdf(self, binary_data, filename):
        with tempfile.TemporaryDirectory() as tmpdir:
            input_path = os.path.join(tmpdir, filename)
            output = ""
            with open(input_path, "wb") as f:
                f.write(binary_data)
            try:
                output = convert(source=input_path, output_dir=tmpdir, soft=1)
                with open(output, "rb") as f:
                    pdf_data = f.read()
                return pdf_data

            except Exception as e:
                raise ValueError(
                    f"Error converting file {filename} to PDF: {str(e)}"
                ) from e

            finally:
                # Clean up the temporary files
                if os.path.exists(input_path):
                    os.remove(input_path)
                if os.path.exists(output):
                    os.remove(output)
