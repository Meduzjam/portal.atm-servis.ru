"use strict";
var router_1 = require('@angular/router');
var plans_1 = require('../components/plans');
exports.routes = [
    {
        path: 'plan',
        redirectTo: 'plan',
        pathMatch: 'full',
    },
    {
        path: 'plan',
        component: plans_1.Plans
    },
    {
        path: 'project',
        component: plans_1.Plans
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(exports.routes)
];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.js.map