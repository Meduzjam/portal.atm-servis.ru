import { provideRouter, RouterConfig }  from '@angular/router';

import { Plans } from '../components/plans';

export const routes: RouterConfig = [
  {
    path: 'plan',
    redirectTo: 'plan',
    pathMatch: 'full',
  },
  {
    path: 'plan',
    component: Plans
  },
  {
    path: 'project',
    component: Plans
  },
];

export const appRouterProviders = [
  provideRouter(routes)
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/