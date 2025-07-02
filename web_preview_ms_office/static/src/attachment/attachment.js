/** @odoo-module **/

import {registerPatch} from "@mail/model/model_core";
import {attr} from "@mail/model/model_field";

registerPatch({
    name: "Attachment",
    fields: {
        isMsOfficeDocument: attr({
            compute() {
                const officeMimeTypes = [
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation", // .pptx
                    "application/msword", // .doc
                    "application/vnd.ms-excel", // .xls
                    "application/vnd.ms-powerpoint", // .ppt
                ];
                return officeMimeTypes.includes(this.mimetype);
            },
        }),
        isViewable: {
            compute() {
                if (this.isMsOfficeDocument) {
                    return this.isMsOfficeDocument;
                }
                return this._super();
            },
        },
        defaultSource: {
            compute() {
                if (this.isMsOfficeDocument) {
                    const encodedRoute = encodeURIComponent(
                        `/preview-msoffice/${this.id}`
                    );
                    return encodedRoute;
                }
                return this._super();
            },
        },
    },
});
