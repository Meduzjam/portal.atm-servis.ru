import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }       from './app.component';
import { routing,
         appRoutingProviders } from './app.routing';

import { PlansModule } from './plans/module';
import { AuthGuard }  from './auth-guard.service';

// import { LoginComponent } from './login.component';

// import { DialogService }  from './dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    //FormsModule,
    routing,
    PlansModule
  ],
  declarations: [
    AppComponent,
    // LoginComponent
  ],
  providers: [
    appRoutingProviders,
    AuthGuard,
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