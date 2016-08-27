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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var service_1 = require('./service');
var PlanListComponent = (function () {
    function PlanListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    PlanListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this.selectedId = +params['id'];
            _this.service.getPlans()
                .subscribe(function (plans) { return _this.plans = plans; }, function (error) { return _this.error = error; });
        });
    };
    PlanListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PlanListComponent.prototype.isSelected = function (plan) { return plan.id === this.selectedId; };
    PlanListComponent.prototype.onSelect = function (plan) {
        this.router.navigate(['/plan', plan.id]);
    };
    PlanListComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>\u041F\u043B\u0430\u043D\u044B</h2>\n    <ul class=\"items\">\n      <li *ngFor=\"let plan of plans\"\n        [class.selected]=\"isSelected(plan)\"\n        (click)=\"onSelect(plan)\">\n        <span class=\"badge\">{{plan.id}}</span> {{plan.Department()}} {{plan.year}}\n      </li>\n    </ul>\n    <div style=\"background-color:red\" *ngIf=\"error\">{{error}}</div>\n  "
        }), 
        __metadata('design:paramtypes', [service_1.PlanService, router_1.ActivatedRoute, router_1.Router])
    ], PlanListComponent);
    return PlanListComponent;
}());
exports.PlanListComponent = PlanListComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=list.component.js.map