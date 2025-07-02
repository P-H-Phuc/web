/** @odoo-module **/

import {useService} from "@web/core/utils/hooks";
import {patch} from "@web/core/utils/patch";
import {Many2ManyBinaryField} from "@web/views/fields/many2many_binary/many2many_binary_field";

Many2ManyBinaryField.extractProps = ({attrs, field}) => {
    return {
        acceptedFileExtensions: attrs.options.accepted_file_extensions,
        className: attrs.class,
        uploadText: attrs.options.upload_text || field.string,
    };
};

patch(Many2ManyBinaryField.prototype, "web_preview_attachment_base.AttachmentPreview", {
    setup() {
        this._super.apply(this, arguments);
        this.messaging = useService("messaging");
        this.dialog = useService("dialog");
    },

    isPreviewable(file) {
        return false;
    },

    onFilePreview(file) {
        if (this.isPreviewable(file)) {
            this._onFilePreview(file);
        }
    },

    _onFilePreview(file) {
        this.messaging.get().then((messaging) => {
            const attachmentList = messaging.models["AttachmentList"].insert({
                selectedAttachment: messaging.models["Attachment"].insert({
                    id: file.id,
                    filename: file.name,
                    name: file.name,
                    mimetype: file.mimetype,
                }),
            });
            this.dialog = messaging.models["Dialog"].insert({
                attachmentListOwnerAsAttachmentView: attachmentList,
            });
        });
    },
});
