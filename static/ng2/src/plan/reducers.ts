import { Action } from '@ngrx/store';
import * as _ from 'lodash';

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
            selectedDepartment : null
          }

        case departmentActionType.GET_FAIL:
          return Object.assign({}, state, {
            departments:[],
            selectedDepartment: null,
            loading: false,
            error: action.payload
          });      

        case departmentActionType.SELECT_CURRENT:
          return Object.assign({}, state, {
            selectedDepartment: action.payload,
          });   


        case departmentActionType.ADD_SUCCESS:
          return Object.assign({}, state, {
            loading: false,
            error:null
          });          

        case departmentActionType.EDIT_SUCCESS:
          let index = _.findIndex(state.departments, {id: action.payload.id});
          if (index >= 0) {
            return Object.assign({}, state, {
              departments: [
                ...state.departments.slice(0, index),
                action.payload,
                ...state.departments.slice(index + 1)
              ]

            });
            
          }
          return state;          


        default:
          return state;
      }
    }
}
