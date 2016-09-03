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
var PlanDetailComponent = (function () {
    function PlanDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    PlanDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id']; // (+) converts string 'id' to a number
            _this.service.getPlan(id)
                .subscribe(function (plan) {
                _this.plan = plan;
                _this.service.getPlanProjects(_this.plan.projects)
                    .subscribe(function (planProjects) { return _this.planProjects = planProjects; }, function (error) { return _this.error = error; });
            }, function (error) { return _this.error = error; });
        });
    };
    PlanDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PlanDetailComponent.prototype.isSelected = function (planProject) { return planProject.id === this.selectedId; };
    PlanDetailComponent.prototype.onSelect = function (planProject) {
        this.router.navigate(['/planproject', planProject.id, 'tasks']);
    };
    PlanDetailComponent = __decorate([
        core_1.Component({
            template: "\n\n    <h2 *ngIf=plan>\u0414\u0435\u0442\u0430\u043B\u0438 \u043F\u043B\u0430\u043D\u0430 {{plan.Department()}} \u0437\u0430 {{plan.year}} \u0433\u043E\u0434</h2>\n    <ul class=\"items\">\n      <li *ngFor=\"let planProject of planProjects\"\n      [class.selected]=\"isSelected(planProject)\"\n        (click)=\"onSelect(planProject)\">\n        <span class=\"badge\">{{planProject.id}}</span>{{planProject.project.name}} \n      </li>\n    </ul>\n    <div style=\"color:red\" *ngIf=\"error\">{{error}}</div>\n\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, service_1.PlanService])
    ], PlanDetailComponent);
    return PlanDetailComponent;
}());
exports.PlanDetailComponent = PlanDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=detail.component.js.map