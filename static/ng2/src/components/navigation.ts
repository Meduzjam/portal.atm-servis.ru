import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  template: `
    
    <nav>
      <a routerLink="/" routerLinkActive="active">Главная</a>
      <a routerLink="/departments" routerLinkActive="active">Отделы</a>
      <a routerLink="/timesheet" routerLinkActive="active">Табель</a>
      <a href="/admin">Администрирование</a>
    </nav>

  `
})
export class NavigationComponent {
}