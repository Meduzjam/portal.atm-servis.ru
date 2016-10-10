import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from '@ngrx/router-store';

import { STORE_PROVIDER, STORE_PROVIDER_TOKEN } from './providers/store-provider';

import { COMPONENTS } from './components';
import { AppComponent } from './containers/app';
import { routing,
         appRoutingProviders } from './routers';

import { PlanModule } from './plan';
import { AuthGuard } from './services/auth-guard';

import {RouterStoreProvider} from './reducers';

// import { STORE } from './app.reducer';
// import { LoginComponent } from './login.component';

// import { DialogService }  from './dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    //FormsModule,
    routing,
    PlanModule,
    StoreModule.provideStore({}),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  declarations: [
    COMPONENTS,
    AppComponent,
    // LoginComponent
  ],
  providers: [
    STORE_PROVIDER,
    {
      provide: STORE_PROVIDER_TOKEN,
      useClass: RouterStoreProvider,
      multi: true
    },
    appRoutingProviders,
    AuthGuard,
    { provide: APP_BASE_HREF, useValue: '/' },
    // DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/