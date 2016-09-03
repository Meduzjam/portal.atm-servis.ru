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
var TaskListComponent = (function () {
    function TaskListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.service.getPlanProject(id)
                .subscribe(function (planProject) {
                _this.planProject = planProject;
                _this.service.getPlanProjectTasks(_this.planProject.tasks)
                    .subscribe(function (planProjectTasks) { return _this.planProjectTasks = planProjectTasks; }, function (error) { return _this.error = error; });
            }, function (error) { return _this.error = error; });
        });
    };
    TaskListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TaskListComponent.prototype.isSelected = function (planProjectTask) { return planProjectTask.id === this.selectedId; };
    TaskListComponent = __decorate([
        core_1.Component({
            template: "\n    <h2 *ngIf=planProject>\u0417\u0430\u0434\u0430\u0447\u0438 \u043F\u043B\u0430\u043D\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 {{planProject.project.name}}</h2>\n    <ul class=\"items\">\n      <li *ngFor=\"let planProjectTask of planProjectTasks\">\n        <span class=\"badge\">{{planProjectTask.id}}</span> {{planProjectTask.task.name}}, {{planProjectTask.Status()}}, {{planProjectTask.owner.username}}\n      </li>\n    </ul>\n    <div style=\"color:red\" *ngIf=\"error\">{{error}}</div>\n  "
        }), 
        __metadata('design:paramtypes', [service_1.PlanService, router_1.ActivatedRoute, router_1.Router])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=task.list.component.js.map