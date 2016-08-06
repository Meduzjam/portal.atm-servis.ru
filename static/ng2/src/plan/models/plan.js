"use strict";
var PlanModel = (function () {
    function PlanModel(id, department, year) {
        this.id = id;
        this.department = department;
        this.year = year;
    }
    PlanModel.fromJSON = function (json) {
        return json.map(function (data) {
            var obj = Object.create(PlanModel.prototype);
            Object.assign(obj, data);
            return obj;
        });
    };
    PlanModel.prototype.Test = function () {
        return "all good";
    };
    return PlanModel;
}());
exports.PlanModel = PlanModel;
//# sourceMappingURL=plan.js.map