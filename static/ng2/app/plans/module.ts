import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { PlanListComponent }    from './list.component';
import { PlanDetailComponent }  from './detail.component';

import { PlanService } from './service';

import { plansRouting } from './routing';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    plansRouting
  ],
  declarations: [
    PlanListComponent,
    PlanDetailComponent
  ],
  providers: [
    PlanService
  ]
})
export class PlansModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/