import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

const ACTION_PREFIX = "[Department]";  
export const departmentActionType = {  
    GET: `${ACTION_PREFIX} Get`,
    GET_SUCCESS: `${ACTION_PREFIX} Get Success`,
    GET_FAIL: `${ACTION_PREFIX} Get Fail`,
};


@Injectable()
export class DepartmentActions {


    get(): Action {
        return {
            type: departmentActionType.GET
        };
    }

    getSuccess(items:any): Action {
        return {
            type: departmentActionType.GET_SUCCESS,
            payload: items
        };
    }

    getFail(error:any): Action {
        return {
            type: departmentActionType.GET_FAIL,
            payload: error
        };
    }    


}