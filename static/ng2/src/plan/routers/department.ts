import { Routes, RouterModule } from '@angular/router';

import { DepartmentPageComponent }  from '../containers';
// import { AuthGuard }  from '../auth-guard.service';

const departmentRoutes: Routes = [
  { 
    path: 'departments',
    component: DepartmentPageComponent,
  },
  /*{ 
    path: 'department/:id',
    component: DepartmentEditPageComponent,
    canActivate: [AuthGuard]
  },*/
  
];

export const departmentRouting = RouterModule.forChild(departmentRoutes);