import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';


@Injectable()
export class PlanActions {
    static LOAD = '[Plan] Load plans';
    load(): Action {
        return {
            type: PlanActions.LOAD,
            payload: null
        };
    }

    static LOAD_SUCCESS = '[Plan] Load plans success';
    loadSuccess(plans:any): Action {
        return {
            type: PlanActions.LOAD_SUCCESS,
            payload: plans
        };
    }

    static SAVE = '[Plan] Save plan';
    save(plan:any): Action {
        return {
            type: PlanActions.SAVE,
            payload: plan
        };
    }

    static SAVE_SUCCESS = '[Plan] Save plan success';
    saveSuccess(plan:any): Action {
        return {
            type: PlanActions.SAVE_SUCCESS,
            payload: plan
        };
    }

}

