"use strict";
var router_1 = require('@angular/router');
var list_component_1 = require('./list.component');
var detail_component_1 = require('./detail.component');
var task_list_component_1 = require('./task.list.component');
var auth_guard_service_1 = require('../auth-guard.service');
var plansRoutes = [
    {
        path: 'plans',
        component: list_component_1.PlanListComponent,
    },
    {
        path: 'plan/:id',
        component: detail_component_1.PlanDetailComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    },
    {
        path: 'planproject/:id/tasks',
        component: task_list_component_1.TaskListComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    }
];
exports.plansRouting = router_1.RouterModule.forChild(plansRoutes);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=routing.js.map