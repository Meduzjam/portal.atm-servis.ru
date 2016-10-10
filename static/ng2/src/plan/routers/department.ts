import { Routes, RouterModule } from '@angular/router';

import * as containers from '../containers';
// import { AuthGuard }  from '../auth-guard.service';

const departmentRoutes: Routes = [
  { 
    path: 'departments',
    component: containers.DepartmentPageComponent,
  },
  { 
    path: 'department/:id',
    component: containers.DepartmentEditPageComponent,
    // canActivate: [AuthGuard]
  },
  
];

export const departmentRouting = RouterModule.forChild(departmentRoutes);