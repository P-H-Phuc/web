/* Copyright 2012 Agile Business Group
   Copyright 2016 Henry Zhou (http://www.maxodoo.com)
   Copyright 2019 Tecnativa
   Copyright 2025 Trobz <https://www.trobz.com/>
   License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl). */

import {ListController} from "@web/views/list/list_controller";
import {exprToBoolean} from "@web/core/utils/strings";
import {onWillStart} from "@odoo/owl";
import {patch} from "@web/core/utils/patch";
import {user} from "@web/core/user";

patch(ListController.prototype, {
    setup() {
        super.setup(...arguments);
        onWillStart(async () => {
            this._canExportCurrentView =
                (await user.hasGroup("base.group_allow_export")) &&
                exprToBoolean(
                    this.env.config.viewArch.getAttribute("export_xlsx"),
                    true
                );
        });
    },
});
