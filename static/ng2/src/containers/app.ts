import { Component } from '@angular/core';

@Component({
  selector: 'portal-app',
  template: `
    <h1 class="title">Портал ЗАО "АТМ-Сервис"</h1>
    <nav>
      <a routerLink="/departments" routerLinkActive="active">План работ</a>
      <a routerLink="/timesheet" routerLinkActive="active">Табель</a>
      <a href="/admin">Администрирование</a>
    </nav>
    <router-outlet></router-outlet>   

  `
})
export class AppComponent {

}


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