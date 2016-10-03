import { NgModule }	from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';

import { STORE_PROVIDER_TOKEN } from '../providers/store-provider';
import { DepartmentsStoreProvider } from './reducers';
import { RestService } from './services';
import { DepartmentActions } from './actions';
import { DepartmentEffects } from './effects'

import { departmentRouting } from './routers'

import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		departmentRouting,
		EffectsModule.run(DepartmentEffects)
	],
	declarations: [ CONTAINERS, COMPONENTS ]
	,
	providers: [
		HttpModule,
		RestService,
		DepartmentActions,
		{
			provide: STORE_PROVIDER_TOKEN,
			useClass: DepartmentsStoreProvider,
			multi: true
		}
	]
})
export class PlanModule {}