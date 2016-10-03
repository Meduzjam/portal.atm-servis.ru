import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class DepartmentActions {
    static ACTION_NAME = 'Department';

    static LOAD = `[${DepartmentActions.ACTION_NAME}] Load`;
    load(): Action {
        return {
            type: DepartmentActions.LOAD
        };
    }

    static LOAD_SUCCESS = `[${DepartmentActions.ACTION_NAME}] Load success`;
    loadSuccess(items:any): Action {
        return {
            type: DepartmentActions.LOAD_SUCCESS,
            payload: items
        };
    }

    static SAVE = `[${DepartmentActions.ACTION_NAME}] Save`;
    save(item:any): Action {
        return {
            type: DepartmentActions.SAVE,
            payload: item
        };
    }

    static SAVE_SUCCESS = `[${DepartmentActions.ACTION_NAME}] Save success`;
    saveSuccess(item:any): Action {
        return {
            type: DepartmentActions.SAVE_SUCCESS,
            payload: item
        };
    }

}