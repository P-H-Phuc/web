{
    'name': 'Preview MS Office',
    'version': '16.0.1.0.0',
    'summary': 'Preview MS Office Documents in Odoo',
    'category': 'Tools',
    'website': 'https://github.com/OCA/web',
    'maintainer': 'Phan Hong Phuc',
    'author': 'Phan Hong Phuc, Odoo Community Association (OCA)',
    'license': 'LGPL-3',
    'depends': ['web_preview_attachment_base'],
    'external_dependencies': {'python': ['msoffice2pdf']},
    'assets': {
        'web.assets_backend': [
            'web_preview_ms_office/static/src/attachment/attachment_viewer_viewable.js',
            'web_preview_ms_office/static/src/attachment/attachment_viewer.xml',
            'web_preview_ms_office/static/src/attachment/attachment.js',
            'web_preview_ms_office/static/src/many2many_binary/attachment_preview.js',
        ],
    },
    'installable': True,
    'application': False,
    'images': ['static/description/icon.png'],
    'auto_install': False,
}
