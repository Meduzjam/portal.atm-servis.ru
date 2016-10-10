import { Action } from '@ngrx/store';
import * as _ from 'lodash';

import { StoreProvider } from '../providers/store-provider';
import { departmentActionType } from './actions'
import { Department } from './models'

export interface DepartmentSingleState {
  loading:boolean;
  error:Error;
  department: Department;
};

export interface DepartmentListState {
  loading:boolean;
  error:Error;
  departments: Department[];
};


const initialDepartmentSingleState: DepartmentSingleState = {
  loading: false,
  error: null,
  department: null, 
};

const initialDepartmentListState: DepartmentListState = {
  loading: false,
  error: null,
  departments: [],
};

export class DepartmentListStoreProvider extends StoreProvider<DepartmentListState> {
    name() { return "departments"; }

    reducer(state: DepartmentListState = initialDepartmentListState, action: Action):DepartmentListState {
      switch (action.type) {
        // ...
        case departmentActionType.GET_LIST:{
          return Object.assign({}, state, {
            loading: true,
            error:null
          });
         }

        case departmentActionType.GET_LIST_SUCCESS:{
          return {
            loading: false,
            error: null,
            departments : action.payload,
          }
        }

        case departmentActionType.GET_LIST_FAIL:{
          return Object.assign({}, state, {
            departments:[],
            loading: false,
            error: action.payload
          });
         }


        case departmentActionType.ADD_SUCCESS:{
          return Object.assign({}, state, {
            departments: [...state.departments, action.payload],
            loading: false,
            error:null
          });
        }

        case departmentActionType.EDIT_SUCCESS:{
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
        }

        case departmentActionType.DELETE_SUCCESS:{
          return Object.assign({}, state, {
            departments: state.departments.filter(department => {
                return department.id !== action.payload.id;
              }),
            loading: false,
            error:null
          });
        }

        default:
          return state;
      }
    }
}

export class DepartmentSingleStoreProvider extends StoreProvider<DepartmentSingleState> {
    name() { return "department"; }

    reducer(state: DepartmentSingleState = initialDepartmentSingleState, action: Action):DepartmentSingleState {
      switch (action.type) {
        // ...
        case departmentActionType.GET:{
          return Object.assign({}, state, {
            loading: true,
            error:null
          });
        }

        case departmentActionType.GET_SUCCESS:{
          return {
            loading: false,
            error: null,
            department : action.payload,
          }
        }

        case departmentActionType.GET_FAIL:{
          return Object.assign({}, state, {
            loading: false,
            error: action.payload,
            department: null
          });
        }

        case departmentActionType.EDIT:
          return Object.assign({}, state, {
            loading: true,
            error:null
          });

        case departmentActionType.EDIT_SUCCESS:
          return {
            loading: false,
            error: null,
            department : action.payload,
          }

        case departmentActionType.EDIT_FAIL:
          return Object.assign({}, state, {
            // department: null,
            loading: false,
            error: action.payload
          });   

        case departmentActionType.ADD:
          return Object.assign({}, state, {
            loading: true,
            error:null
          });

        case departmentActionType.ADD_SUCCESS:
          return Object.assign({}, state, {
            loading: false,
            error: null,
            // department : action.payload,
          });

        case departmentActionType.ADD_FAIL:
          return Object.assign({}, state, {
            // department: null,
            loading: false,
            error: action.payload
          });  

        case departmentActionType.RESET_BLANK:
          return initialDepartmentSingleState;          

        default:{
          return state;
        }
      }
    }
}