import { ActionReducer, Action, combineReducers, StoreModule } from '@ngrx/store';

/*import { AppState } from './app.state';
import { plansReducer, 
		 initialState as plansReducerinitialState } from './plans/reducer';*/


const INITIAL_REDUCER: ActionReducer<{}> = 
  (state: {}, action: Action): {} => {
  return {};
  }

/*export const appReducer = combineReducers({
	plansReducer
});

export const rootReducer: ActionReducer<AppState> = 
  (state: AppState = initialState, action: Action): AppState => {
	return appReducer(state, action);
	}

export const initialState = rootReducer(plansReducerinitialState, { type:'INIT', payload:null });

export const STORE = StoreModule.provideStore( rootReducer, initialState );*/