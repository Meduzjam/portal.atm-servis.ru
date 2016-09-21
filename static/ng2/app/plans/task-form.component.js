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
var forms_1 = require('@angular/forms');
var TaskFormComponent = (function () {
    function TaskFormComponent(fb) {
        this.myForm = fb.group({
            'taskName': ['', forms_1.Validators.required]
        });
    }
    TaskFormComponent.prototype.onSubmit = function () {
    };
    TaskFormComponent.prototype.ngOnInit = function () {
    };
    TaskFormComponent.prototype.ngOnDestroy = function () {
    };
    TaskFormComponent = __decorate([
        core_1.Component({
            selector: 'task-form',
            inputs: ['task'],
            template: "\n  \t<form [formGroup]=\"myForm\" \n          (ngSubmit)=\"onSubmit(myForm.value)\">\n\t\t\n\t\t\t<div>\n\t\t\t\t<label for=\"\"></label>\n\t\t\t\t<input type=\"text\" \n          id=\"taskNameInput\"\n          [formControl]=\"myForm.controls['taskName']\"\n\t\t\t\t\t[ngModel] = \"task.name\"\n\t\t\t\t>\n\t\t\t</div>\n      <button type=\"submit\">Submit</button>\n  \t</form>\n  "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], TaskFormComponent);
    return TaskFormComponent;
}());
exports.TaskFormComponent = TaskFormComponent;
//# sourceMappingURL=task-form.component.js.map