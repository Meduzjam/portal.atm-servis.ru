import { OpaqueToken } from '@angular/core';
import { Action, combineReducers, INITIAL_REDUCER } from '@ngrx/store';

export const STORE_PROVIDER_TOKEN = new OpaqueToken('StoreProvider');

/*const INITIAL_REDUCER: ActionReducer<any> = 
  (state: any, action: Action): {} => {
    console.log('log');
  return state;
  }*/

export abstract class StoreProvider<T> {
    abstract name(): string;
    abstract reducer(state: T, action: Action): T;
}

export const STORE_PROVIDER: any[] = [
    {
        provide :INITIAL_REDUCER, 
        deps: [STORE_PROVIDER_TOKEN],
        useFactory(reducers:StoreProvider<any>[]) {
            var obj = reducers.reduce((o, provider) => {
                o[provider.name()] = provider.reducer;
                return o;
            }, {});
            return combineReducers(obj);
        }
    }
]

/*export const STORE_PROVIDER: Provider =
{
	  provide: _INITIAL_REDUCER,
    deps: [ STORE_PROVIDER_TOKEN ],
    useFactory: function(providers: StoreProvider<any>[]) {
      console.log('prov');
    	var obj = providers.reduce( (o, provider) => {
          o[provider.name()] = provider.reducer;
          return o;
        }, {});
        return combineReducers(obj);
    }
}*/



