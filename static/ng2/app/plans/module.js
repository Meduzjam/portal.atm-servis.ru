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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var list_component_1 = require('./list.component');
var detail_component_1 = require('./detail.component');
var task_list_component_1 = require('./task.list.component');
var service_1 = require('./service');
var routing_1 = require('./routing');
var PlansModule = (function () {
    function PlansModule() {
    }
    PlansModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                routing_1.plansRouting
            ],
            declarations: [
                list_component_1.PlanListComponent,
                detail_component_1.PlanDetailComponent,
                task_list_component_1.TaskListComponent
            ],
            providers: [
                service_1.PlanService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PlansModule);
    return PlansModule;
}());
exports.PlansModule = PlansModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=module.js.map