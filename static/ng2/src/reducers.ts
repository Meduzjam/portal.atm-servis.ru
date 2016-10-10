import { Action } from '@ngrx/store';
import { RouterState, initialState, routerReducer } from '@ngrx/router-store';

import { StoreProvider } from './providers/store-provider';


export class RouterStoreProvider extends StoreProvider<RouterState> {
    name() { return "router"; }

    reducer(state: RouterState = initialState, action: Action):RouterState { 
      return routerReducer(state, action);
    };
}

