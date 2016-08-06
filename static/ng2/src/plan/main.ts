import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Component } from "@angular/core";
import { PlanService } from './services/plan';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { appRouterProviders }   from './routes/app';

@Component({
	selector: 'app-plans',
	directives: [ROUTER_DIRECTIVES],
	providers: [PlanService],
	template:`

    	<nav>
      		<a [routerLink]="['/plan']" routerLinkActive="active">План работ</a>
      		
    	</nav>
    	<router-outlet></router-outlet>

	`
})
class AppPlans{}

bootstrap(AppPlans, [HTTP_PROVIDERS,appRouterProviders])
	.catch(err => console.error(err));