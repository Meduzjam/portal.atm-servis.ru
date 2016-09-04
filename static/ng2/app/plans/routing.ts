import { Routes, RouterModule } from '@angular/router';

import { PlanListComponent }    from './list.component';
import { PlanDetailComponent }  from './detail.component';
import { ProjectTaskListComponent }  from './project-task-list.component';
import { AuthGuard }  from '../auth-guard.service';

const plansRoutes: Routes = [
  { 
    path: 'plans',
    component: PlanListComponent,
  },
  { 
    path: 'plan/:id',
    component: PlanDetailComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'planproject/:id/tasks',
    component: ProjectTaskListComponent,
    canActivate: [AuthGuard]
  }
];

export const plansRouting = RouterModule.forChild(plansRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/