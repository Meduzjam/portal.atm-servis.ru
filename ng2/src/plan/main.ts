import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Component } from "@angular/core";
import { SertificatesService } from './services/sertificates';
import { Sertificates } from './components/sertificates';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
	selector: 'app-plan',
	directives: [plans],
	providers: [PlanService],
	template:`
		<div>
			<plans></plans>
		</div>
	`
})
class AppPlan{}

bootstrap(AppPlan, [HTTP_PROVIDERS])
	.catch(err => console.error(err));