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
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require("@angular/core");
var plan_1 = require('./services/plan');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_1 = require('./routes/app');
var AppPlans = (function () {
    function AppPlans() {
    }
    AppPlans = __decorate([
        core_1.Component({
            selector: 'app-plans',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [plan_1.PlanService],
            template: "\n\n    \t<nav>\n      \t\t<a [routerLink]=\"['/plan']\" routerLinkActive=\"active\">\u041F\u043B\u0430\u043D \u0440\u0430\u0431\u043E\u0442</a>\n      \t\t\n    \t</nav>\n    \t<router-outlet></router-outlet>\n\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppPlans);
    return AppPlans;
}());
platform_browser_dynamic_1.bootstrap(AppPlans, [http_1.HTTP_PROVIDERS, app_1.appRouterProviders])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map