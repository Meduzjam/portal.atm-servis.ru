import { RouterConfig }  from '@angular/router';
import { Plans } from '../components/plans';

export const plansRoutes: RouterConfig = [
  {
    path: 'plans',
    component: Plans
  },
  {
    path: 'plan/:id',
    component: PlanDetail
  },
];
