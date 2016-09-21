"use strict";
var store_1 = require('@ngrx/store');
var Actions = require('./actions');
exports.plans = function (state, action) {
    switch (action.type) {
        case Actions.ADD_PLANS:
            var payload = action.payload;
            return payload;
        default:
            return state;
    }
};
exports.selectedPlan = function (state, action) {
    switch (action.type) {
        case Actions.SELECT_PLAN:
            var payload = action.payload;
            return payload;
        default:
            return state;
    }
};
exports.plansReducer = store_1.combineReducers({
    plans: exports.plans,
    selectedPlan: exports.selectedPlan
});
exports.initialState = exports.plansReducer({}, { type: 'INIT', payload: null });
exports.STORE = store_1.StoreModule.provideStore(exports.plansReducer, exports.initialState);
//# sourceMappingURL=reducer.js.map