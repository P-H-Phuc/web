{
    'name': 'Base Of Preview Documents in Odoo',
    'version': '16.0.1.0.0',
    'summary': 'Base of Preview Documents in Odoo',
    'category': 'Tools',
    'website': 'https://github.com/OCA/web',
    'maintainer': 'Phan Hong Phuc',
    'author': 'Phan Hong Phuc, Odoo Community Association (OCA)',
    'license': 'LGPL-3',
    'depends': ['web', 'mail'],
    'assets': {
        'web.assets_backend': [
            'web_preview_attachment_base/static/src/many2many_binary/attachment_preview.xml',
            'web_preview_attachment_base/static/src/many2many_binary/attachment_preview.js',
        ],
    },
    'installable': True,
    'application': False,
    'images': ['static/description/icon.png'],
    'auto_install': False,
}
