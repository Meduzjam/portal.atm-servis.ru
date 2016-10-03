import { OpaqueToken, Provider } from '@angular/core';
import { ActionReducer, Action, combineReducers } from '@ngrx/store';


export const STORE_PROVIDER_TOKEN = new OpaqueToken('StoreProvider');

const INITIAL_REDUCER: ActionReducer<any> = 
  (state: any, action: Action): {} => {
    console.log('log');
  return state;
  }

export abstract class StoreProvider<T> {
    abstract name(): string;
    abstract reducer(state: T, action: Action): T;
}

export const STORE_PROVIDER: Provider =
{
	  provide: INITIAL_REDUCER,
    deps: [ STORE_PROVIDER_TOKEN ],
    useFactory: function(providers: StoreProvider<any>[]) {
    	var obj = providers.reduce( (o, provider) => {
          o[provider.name()] = provider.reducer;
          return o;
        }, {});
        return combineReducers(obj);
    }
}



