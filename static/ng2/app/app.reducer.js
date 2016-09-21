"use strict";
var store_1 = require('@ngrx/store');
var reducer_1 = require('./plans/reducer');
exports.appReducer = store_1.combineReducers({
    plansReducer: reducer_1.plansReducer
});
exports.rootReducer = function (state, action) {
    if (state === void 0) { state = exports.initialState; }
    return exports.appReducer(state, action);
};
exports.initialState = exports.rootReducer(reducer_1.initialState, { type: 'INIT', payload: null });
exports.STORE = store_1.StoreModule.provideStore(exports.rootReducer, exports.initialState);
//# sourceMappingURL=app.reducer.js.map