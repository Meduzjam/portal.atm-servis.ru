import { Action } from '@ngrx/store';

import { STORE_PROVIDER_TOKEN, StoreProvider } from '../providers/store-provider';
import { DepartmentActions } from './actions'
import { Department } from './models'


export interface DepartmentState {
	departments: Department[];
	selectedDepartment: Department;

};

const initialDepartmentState: DepartmentState = {
  departments: [],
  selectedDepartment: null
};


export class DepartmentsStoreProvider extends StoreProvider<DepartmentState> {
    name() { return "department"; }

    reducer(state: DepartmentState = initialDepartmentState, action: Action):DepartmentState {
      switch (action.type) {
        // ...
        case DepartmentActions.LOAD:
          console.log('load');
        	return state;

        case DepartmentActions.LOAD_SUCCESS:
        	console.log('load success');
          return {
            departments : action.payload,
            selectedDepartment : state.selectedDepartment
          }

        default:
           	return state;
      }
    }
}
