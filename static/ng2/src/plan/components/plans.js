"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var plan_1 = require('../services/plan');
var plan_item_render_1 = require('./plan-item-render');
var Plans = (function () {
    function Plans(planService) {
        this.planService = planService;
    }
    Plans.prototype.getPlan = function () {
        var _this = this;
        this.error = null;
        this.planService
            .getPlans()
            .then(function (plans) {
            _this.plans = plans;
            _this.currentPlan = _this.plans[0] || undefined;
        })
            .catch(this.OnError.bind(this));
    };
    Plans.prototype.setCurrentPlan = function (plan) {
        this.currentPlan = plan || undefined;
    };
    Plans.prototype.OnError = function (error) {
        this.error = error;
        console.error(this.error);
    };
    Plans.prototype.ngOnInit = function () {
        this.getPlan();
    };
    Plans.prototype.LogClick = function () {
        console.log(this.plans);
        console.log(this.currentPlan);
    };
    Plans = __decorate([
        core_1.Component({
            selector: 'plans',
            directives: [plan_item_render_1.PlanItemRender],
            template: "\n\t\t<button (click)=\"getPlan()\">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</button>\n\t\t<button (click)=\"LogClick()\">\u041B\u043E\u0433</button>\n\n\t\t<ul>\n\t\t  <li *ngFor=\"let plan of plans\">\n\t\t    <a (click)=\"setCurrentPlan(plan)\">{{plan.id}} {{plan.department}} {{plan.year}}</a>\n\t\t  </li>\n\t\t</ul>\n\n\n        <div *ngIf=\"currentPlan\">\n          <h2>\u0414\u0435\u0442\u0430\u043B\u0438 \u043F\u043B\u0430\u043D\u0430</h2>\n          <div>\n\n            <label>id: </label>{{currentPlan.id}}\n\t\t\t<label>\u041F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435: </label>{{currentPlan.department}}\n            \n          </div>\n        </div>\n\n\t\t<div *ngIf=\"error\">\u041E\u0448\u0438\u0431\u043A\u0430: {{error.status}} {{error.statusText}}</div>\n\n\t"
        }), 
        __metadata('design:paramtypes', [plan_1.PlanService])
    ], Plans);
    return Plans;
}());
exports.Plans = Plans;
//# sourceMappingURL=plans.js.map