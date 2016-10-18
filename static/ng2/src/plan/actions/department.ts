import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

const ACTION_PREFIX = "[Department]";  
export const departmentActionType = {  
    
    GET_LIST: `${ACTION_PREFIX} Get List`,
    GET_LIST_SUCCESS: `${ACTION_PREFIX} Get List Success`,
    GET_LIST_FAIL: `${ACTION_PREFIX} Get List Fail`,
    GET: `${ACTION_PREFIX} Get`,
    GET_SUCCESS: `${ACTION_PREFIX} Get Success`,
    GET_FAIL: `${ACTION_PREFIX} Get Fail`,
    ADD: `${ACTION_PREFIX} Add`,
    ADD_SUCCESS: `${ACTION_PREFIX} Add Success`,
    ADD_FAIL: `${ACTION_PREFIX} Add Fail`,
    EDIT: `${ACTION_PREFIX} Edit`,
    EDIT_SUCCESS: `${ACTION_PREFIX} Edit Success`,
    EDIT_FAIL: `${ACTION_PREFIX} Edit Fail`,
    DELETE: `${ACTION_PREFIX} Delete`,
    DELETE_SUCCESS: `${ACTION_PREFIX} Delete Success`,
    DELETE_FAIL: `${ACTION_PREFIX} Delete Fail`,

    RESET_BLANK: `${ACTION_PREFIX} Reset Blank`,
};


@Injectable()
export class DepartmentActions {


    getList(): Action {
        return {
            type: departmentActionType.GET_LIST
        };
    }

    getListSuccess(items:any): Action {
        return {
            type: departmentActionType.GET_LIST_SUCCESS,
            payload: items
        };
    }

    getListFail(error:any): Action {
        return {
            type: departmentActionType.GET_LIST_FAIL,
            payload: error
        };
    }    

    get(id:number): Action {
        return {
            type: departmentActionType.GET,
            payload: id
        };
    }

    getSuccess(item:any): Action {
        return {
            type: departmentActionType.GET_SUCCESS,
            payload: item
        };
    }

    getFail(error:any): Action {
        return {
            type: departmentActionType.GET_FAIL,
            payload: error
        };
    }

    resetBlank(): Action {
        return {
            type: departmentActionType.RESET_BLANK,
        };
    }


    edit(item:any): Action {
        return {
            type: departmentActionType.EDIT,
            payload: item
        };
    }

    editSuccess(item:any): Action {
        return {
            type: departmentActionType.EDIT_SUCCESS,
            payload: item
        };
    }

    editFail(error:any): Action {
        return {
            type: departmentActionType.EDIT_FAIL,
            payload: error
        };
    }      

    add(item:any): Action {
        return {
            type: departmentActionType.ADD,
            payload: item
        };
    }

    addSuccess(item:any): Action {
        return {
            type: departmentActionType.ADD_SUCCESS,
            payload: item
        };
    }

    addFail(error:any): Action {
/*        let foo = error._body? Object.assign({}, error, {
                        _body:JSON.parse(error._body)
                      }):error;
        console.dir(error);*/
        return {
            type: departmentActionType.ADD_FAIL,
            payload: error
        };
    }   

    delete(item:any): Action {
        return {
            type: departmentActionType.DELETE,
            payload: item
        };
    }

    deleteSuccess(item:any): Action {
        return {
            type: departmentActionType.DELETE_SUCCESS,
            payload: item
        };
    }

    deleteFail(error:any): Action {
        return {
            type: departmentActionType.DELETE_FAIL,
            payload: error
        };
    }       

}