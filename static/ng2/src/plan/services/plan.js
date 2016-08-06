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
var http_1 = require('@angular/http');
var plan_1 = require("../models/plan");
require('rxjs/add/operator/toPromise');
var PlanService = (function () {
    function PlanService(http) {
        this.http = http;
        this.endpoint_url = 'http://127.0.0.1:8000/api/v1/plan/?format=json';
    }
    PlanService.prototype.getPlans = function () {
        return this.http.get(this.endpoint_url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    PlanService.prototype.extractData = function (res) {
        return plan_1.PlanModel.fromJSON(res.json().objects) || {};
    };
    PlanService.prototype.handleError = function (error) {
        console.error('ОШИБКА', error);
        return Promise.reject(error.message || error);
    };
    PlanService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlanService);
    return PlanService;
}());
exports.PlanService = PlanService;
//# sourceMappingURL=plan.js.map