- Depend to this module to add your own preview types.
- Example of a custom preview type:
```javascript
   /** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { Many2ManyBinaryField } from "@web/views/fields/many2many_binary/many2many_binary_field";

patch(
    Many2ManyBinaryField.prototype,
    "yourModule.AttachmentPreview",
    {
        isPreviewable(file) {
            if (file.mimetype === "special_mimetype") {
                return true;
            }
            return this._super.apply(this, arguments);
        },
    }
);
```