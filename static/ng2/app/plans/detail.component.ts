import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { PlanService }  from './service';
import { PlanProjectModel, PlanModel } from './model';
import { Subscription }       from 'rxjs/Subscription';

@Component({
  template: `

    <h2 *ngIf=plan>Детали плана {{plan.Department()}} за {{plan.year}} год</h2>
    <ul class="items">
      <li *ngFor="let planProject of planProjects">
        <span class="badge">{{planProject.id}}</span>{{planProject.project.name}} 
      </li>
    </ul>
    

  `
})
export class PlanDetailComponent implements OnInit, OnDestroy  {
  plan: PlanModel;
  planProjects: PlanProjectModel[];

  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PlanService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let id = params['id']; // (+) converts string 'id' to a number
       this.service.getPlan(id)
       // .then(plan => this.plan = plan);
         .subscribe( plan => { 
           this.plan = plan;
           console.dir(this.plan);
           this.service.getPlanProjects(this.plan.projects)
             .subscribe( planProjects => this.planProjects = planProjects );
          });
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

/*  gotoPlans() {
    let planId = this.plan ? this.plan.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    this.router.navigate(['/plans', { id: planId, foo: 'foo' }]);*/
  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/