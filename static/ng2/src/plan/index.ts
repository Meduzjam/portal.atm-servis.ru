import { NgModule }	from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';

import { STORE_PROVIDER_TOKEN } from '../providers/store-provider';
import { DepartmentListStoreProvider,
		 DepartmentSingleStoreProvider } from './reducers';
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
		FormsModule,
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
			useClass: DepartmentSingleStoreProvider,
			multi: true
		},
		{
			provide: STORE_PROVIDER_TOKEN,
			useClass: DepartmentListStoreProvider,
			multi: true
		}
		
	]
})
export class PlanModule {}