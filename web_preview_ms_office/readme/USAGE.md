1. Install the module in your Odoo instance.

2. Add field in your model to include the `attachment_ids` field.
```python
attachment_ids = fields.Many2Many('ir.attachment', string='Attachments')
```

3. In your xml file, include the `many2many_binary` widget:
```xml
<field name="attachment_ids" widget="many2many_binary"/>
```

4. The MS Office file will be displayed in the form view of the model where you added the `attachment_ids` field.