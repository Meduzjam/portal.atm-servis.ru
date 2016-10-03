import { ActionReducer, Action, combineReducers, StoreModule } from '@ngrx/store';
import { PlansState } from './state';
import * as Actions from './actions';
import { PlanModel } from './model';

export const plans: ActionReducer<PlanModel[]> =
	(state: PlanModel[], action: Action): PlanModel[] => {
		switch (action.type) {
			case Actions.ADD_PLANS:
				const payload: PlanModel[] = action.payload;
				return payload;
		default:
			return state;
		}
	};

export const selectedPlan: ActionReducer<PlanModel> =
	(state: PlanModel, action: Action): PlanModel => {
		switch (action.type) {
			case Actions.SELECT_PLAN:
				const payload: PlanModel = action.payload;
				return payload;
		default:
			return state;
		}
	};

export const plansReducer = combineReducers({
	plans,
	selectedPlan
})

export const initialState = plansReducer({}, { type:'INIT', payload:null });

export const STORE = StoreModule.provideStore( plansReducer, initialState );