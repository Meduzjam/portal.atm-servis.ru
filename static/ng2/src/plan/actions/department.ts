import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

const ACTION_PREFIX = "[Department]";  
export const departmentActionType = {  
    GET: `${ACTION_PREFIX} Get`,
    GET_SUCCESS: `${ACTION_PREFIX} Get Success`,
    GET_FAIL: `${ACTION_PREFIX} Get Fail`,
    ADD: `${ACTION_PREFIX} Add`,
    ADD_SUCCESS: `${ACTION_PREFIX} Add Success`,
    ADD_FAIL: `${ACTION_PREFIX} Add Fail`,
    EDIT: `${ACTION_PREFIX} Edit`,
    EDIT_SUCCESS: `${ACTION_PREFIX} Edit Success`,
    EDIT_FAIL: `${ACTION_PREFIX} Edit Fail`,



    SELECT_CURRENT: `${ACTION_PREFIX} Select current`,
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

    selectCurrent(item:any): Action {
        return {
            type: departmentActionType.SELECT_CURRENT,
            payload: item
        };
    }


    editSuccess(items:any): Action {
        return {
            type: departmentActionType.EDIT_SUCCESS,
            payload: items
        };
    }

    editFail(error:any): Action {
        return {
            type: departmentActionType.EDIT_FAIL,
            payload: error
        };
    }      

}