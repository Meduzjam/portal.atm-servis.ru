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
var http_1 = require('@angular/http');
var model_1 = require('./model');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var PlanService = (function () {
    function PlanService(http) {
        this.http = http;
        this.endpoint_url = "http://127.0.0.1:8000";
    }
    PlanService.prototype.getPlans = function () {
        var parameters = new http_1.URLSearchParams();
        parameters.set('format', 'json');
        return this.http.get(this.endpoint_url + '/api/v1/plan', { search: parameters })
            .map(function (res) { return Array.prototype.map.call(res.json().objects, function (val) { return model_1.PlanModel.fromJSON(val); }); })
            .catch(this.handleError);
    };
    PlanService.prototype.getPlan = function (id) {
        var parameters = new http_1.URLSearchParams();
        parameters.set('format', 'json');
        return this.http.get(this.endpoint_url + '/api/v1/plan/' + id + '/', { search: parameters })
            .map(function (res) { return model_1.PlanModel.fromJSON(res.json()); })
            .catch(this.handleError);
    };
    PlanService.prototype.getPlanProjects = function (uri) {
        var parameters = new http_1.URLSearchParams();
        parameters.set('format', 'json');
        // parameters.set('plan__id', id.toString());
        return this.http.get(this.endpoint_url + uri, { search: parameters })
            .map(function (res) { return Array.prototype.map.call(res.json().objects, function (val) { return model_1.PlanProjectModel.fromJSON(val); }); })
            .catch(this.handleError);
    };
    PlanService.prototype.getPlanProject = function (id) {
        var parameters = new http_1.URLSearchParams();
        parameters.set('format', 'json');
        return this.http.get(this.endpoint_url + '/api/v1/planprojects/' + id + '/', { search: parameters })
            .map(function (res) { return model_1.PlanProjectModel.fromJSON(res.json()); })
            .catch(this.handleError);
    };
    PlanService.prototype.getPlanProjectTasks = function (uri) {
        var parameters = new http_1.URLSearchParams();
        parameters.set('format', 'json');
        // parameters.set('plan__id', id.toString());
        return this.http.get(this.endpoint_url + uri, { search: parameters })
            .map(function (res) { return Array.prototype.map.call(res.json().objects, function (val) { return model_1.PlanProjectTaskModel.fromJSON(val); }); })
            .catch(this.handleError);
    };
    PlanService.prototype.getTask = function (uri) {
        var _this = this;
        var parameters = new http_1.URLSearchParams();
        parameters.set('format', 'json');
        // parameters.set('plan__id', id.toString());
        return this.http.get(this.endpoint_url + uri, { search: parameters })
            .map(function (res) { return Array.prototype.map.call(res.json().objects, function (val) {
            var task = model_1.TaskModel.fromJSON(val);
            if (task.parent) {
                _this.getTask(task.parent);
            }
            return task;
        }); })
            .catch(this.handleError);
    };
    PlanService.prototype.getPlanDetail = function (id) {
        return this.getPlans()
            .map(function (plans) { return plans.find(function (plan) { return plan.id === +id; }); });
    };
    PlanService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    PlanService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlanService);
    return PlanService;
}());
exports.PlanService = PlanService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=service.js.map