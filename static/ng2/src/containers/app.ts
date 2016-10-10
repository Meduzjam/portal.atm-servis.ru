import { Component } from '@angular/core';
import { NavigationComponent } from '../components';


@Component({
  selector: 'portal-app',
  template: `
    <h1 class="title">Портал ЗАО "АТМ-Сервис"</h1>

    <navigation></navigation>
    <router-outlet></router-outlet>   

  `
})
export class AppComponent {

}
