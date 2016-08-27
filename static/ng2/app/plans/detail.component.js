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
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.service.getPlanProjects(id)
                .subscribe(function (planProjects) { _this.planProjects = planProjects; console.dir(planProjects); });
        });
    };
    PlanDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PlanDetailComponent = __decorate([
        core_1.Component({
            template: "\n\n    <h2>\u041F\u0440\u043E\u0435\u043A\u0442\u044B \u043F\u043B\u0430\u043D\u04301</h2>\n    <ul class=\"items\">\n      <li *ngFor=\"let planProject of planProjects\">\n        <span class=\"badge\">{{planProject.id}}</span> {{planProject.project.name}}\n      </li>\n    </ul>\n    \n\n  "
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