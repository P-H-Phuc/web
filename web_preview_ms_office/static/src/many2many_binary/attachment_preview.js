/** @odoo-module **/

import {patch} from "@web/core/utils/patch";
import {Many2ManyBinaryField} from "@web/views/fields/many2many_binary/many2many_binary_field";

patch(Many2ManyBinaryField.prototype, "web_preview_ms_office.AttachmentPreview", {
    isMsOfficeDocument(file) {
        const officeMimeTypes = [
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
            "application/vnd.openxmlformats-officedocument.presentationml.presentation", // .pptx
            "application/msword", // .doc
            "application/vnd.ms-excel", // .xls
            "application/vnd.ms-powerpoint", // .ppt
        ];
        return officeMimeTypes.includes(file.mimetype);
    },

    isPreviewable(file) {
        return this.isMsOfficeDocument(file) || this._super.apply(this, arguments);
    },
});
