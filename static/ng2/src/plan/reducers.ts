import { Action } from '@ngrx/store';

import { STORE_PROVIDER_TOKEN, StoreProvider } from '../providers/store-provider';
import { departmentActionType } from './actions'
import { Department } from './models'


export interface DepartmentState {
  loading:boolean;
  error:Error;
	departments: Department[];
	selectedDepartment: Department;

};

const initialDepartmentState: DepartmentState = {
  loading: false,
  error: null,
  departments: [],
  selectedDepartment: null
};


export class DepartmentsStoreProvider extends StoreProvider<DepartmentState> {
    name() { return "department"; }

    reducer(state: DepartmentState = initialDepartmentState, action: Action):DepartmentState {
      switch (action.type) {
        // ...
        case departmentActionType.GET:
          return Object.assign({}, state, {
            loading: true,
            error:null
          });

        case departmentActionType.GET_SUCCESS:
          return {
            loading: false,
            error: null,
            departments : action.payload,
            selectedDepartment : state.selectedDepartment
          }

        case departmentActionType.GET_FAIL:
          return Object.assign({}, state, {
            departments:[],
            selectedDepartment: null,
            loading: false,
            error: action.payload
          });      

        default:
           	return state;
      }
    }
}
