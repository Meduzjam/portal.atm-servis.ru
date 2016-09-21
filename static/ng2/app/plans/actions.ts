import { Action } from '@ngrx/store';

import { PlanModel } from './model';

export const ADD_PLANS = '[Plans] Add plans';
export const addPlans: (planModels:PlanModel[]) => 
	Action = (planModels:PlanModel[]) => {
		return {
	    	payload: planModels,
    		type: ADD_PLANS
  		};
};	

export const SELECT_PLAN = '[Plans] Select plan';
export const selectPlan: (planModel:PlanModel) => 
	Action = (planModel:PlanModel) => {
		return {
	    	payload: planModel,
    		type: ADD_PLANS
  		};
};	

