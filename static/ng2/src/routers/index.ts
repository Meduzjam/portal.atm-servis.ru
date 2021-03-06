import { Routes, RouterModule }   from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

/*import { loginRoutes,
         authProviders }  from './login.routing';*/

/*import { CanDeactivateGuard } from './can-deactivate-guard.service';*/

const portalRoutes: Routes = [
  {
    path: '',
    redirectTo: '/departments',
    pathMatch: 'full'
  },
/*  {
    path: 'departments',
    loadChildren: 'app/plan/index#PlanModule'
  }*/
];

const appRoutes: Routes = [
  ...portalRoutes,
  //...crisisCenterRoutes
];

export const appRoutingProviders: any[] = [
  //authProviders,
  //CanDeactivateGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/