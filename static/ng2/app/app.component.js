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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'portal-app',
            template: "\n    <h1 class=\"title\">\u041F\u043E\u0440\u0442\u0430\u043B \u0417\u0410\u041E \"\u0410\u0422\u041C-\u0421\u0435\u0440\u0432\u0438\u0441\"</h1>\n    <nav>\n      <a routerLink=\"/plans\" routerLinkActive=\"active\">\u041F\u043B\u0430\u043D \u0440\u0430\u0431\u043E\u0442</a>\n      <a routerLink=\"/timesheet\" routerLinkActive=\"active\">\u0422\u0430\u0431\u0435\u043B\u044C</a>\n      <a href=\"/admin\">\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435</a>\n    </nav>\n    <router-outlet></router-outlet>   \n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*


 <nav>
      <a routerLink="/crisis-center" routerLinkActive="active"
         [routerLinkActiveOptions]="{ exact: true }">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/crisis-center/admin" routerLinkActive="active">Crisis Admin</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
    </nav>
    <router-outlet></router-outlet>
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map