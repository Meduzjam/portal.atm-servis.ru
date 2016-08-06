"use strict";
var plans_1 = require('../components/plans');
exports.plansRoutes = [
    {
        path: 'plans',
        component: plans_1.Plans
    },
    {
        path: 'plan/:id',
        component: PlanDetail
    },
];
//# sourceMappingURL=plans.js.map