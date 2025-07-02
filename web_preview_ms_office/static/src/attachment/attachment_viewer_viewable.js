/** @odoo-module **/

import { registerPatch } from "@mail/model/model_core";
import { attr } from '@mail/model/model_field';

registerPatch({
    name: "AttachmentViewerViewable",
    fields: {
        isMsOfficeDocument: attr({
            compute() {
                return this.attachmentOwner.isMsOfficeDocument;
            },
        }),
        
    },
});
