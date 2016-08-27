"use strict";
var router_1 = require('@angular/router');
/*import { loginRoutes,
         authProviders }  from './login.routing';*/
/*import { CanDeactivateGuard } from './can-deactivate-guard.service';*/
var portalRoutes = [
    {
        path: '',
        redirectTo: '/plans',
        pathMatch: 'full'
    },
];
var appRoutes = portalRoutes.slice();
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routing.js.map