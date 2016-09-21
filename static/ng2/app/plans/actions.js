"use strict";
exports.ADD_PLANS = '[Plans] Add plans';
exports.addPlans = function (planModels) {
    return {
        payload: planModels,
        type: exports.ADD_PLANS
    };
};
exports.SELECT_PLAN = '[Plans] Select plan';
exports.selectPlan = function (planModel) {
    return {
        payload: planModel,
        type: exports.ADD_PLANS
    };
};
//# sourceMappingURL=actions.js.map