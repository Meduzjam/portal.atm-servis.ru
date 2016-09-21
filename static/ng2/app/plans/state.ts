import { PlanModel } from './model';

export interface PlansState {
  plans: PlanModel[];
  selectedPlan: PlanModel;
}