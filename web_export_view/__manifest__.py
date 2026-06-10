# Copyright 2012 Agile Business Group
# Copyright 2012 Domsense srl (<http://www.domsense.com>)
# Copyright 2012 Therp BV
# Copyright 2016 Henry Zhou (http://www.maxodoo.com)
# Copyright 2016 Rodney (http://clearcorp.cr/)
# Copyright 2019 Tecnativa
# Copyright 2025 Trobz <https://www.trobz.com/>
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

{
    "name": "Web Export Current View",
    "version": "18.0.1.0.0",
    "category": "Web",
    "author": "Henry Zhou, Agile Business Group, Trobz, "
    "Odoo Community Association (OCA)",
    "website": "https://github.com/OCA/web",
    "license": "AGPL-3",
    "depends": [
        "web",
    ],
    "installable": True,
    "auto_install": False,
    "assets": {
        "web.assets_backend": [
            "web_export_view/static/src/components/export_view/**/*",
        ],
    },
}
