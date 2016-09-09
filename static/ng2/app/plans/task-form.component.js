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
var HeroFormComponent = (function () {
    function HeroFormComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
    }
    HeroFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    HeroFormComponent.prototype.ngOnInit = function () {
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
    HeroFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    HeroFormComponent = __decorate([
        core_1.Component({
            selector: 'task-form',
            template: "\n  \t<form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\n\t\t\t<div>\n\t\t\t\t<label for=\"\"></label>\n\t\t\t\t<input type=\"text\" id=\"\"\n\t\t\t\t\t[(ngModel)] = task\n\t\t\t\t>\n\t\t\t</div>\n\n  \t</form>\n  "
        }), 
        __metadata('design:paramtypes', [service_1.PlanService, router_1.ActivatedRoute, router_1.Router])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=task-form.component.js.map