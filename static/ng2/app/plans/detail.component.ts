import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { PlanService }  from './service';
import { PlanProjectModel, PlanModel } from './model';
import { Subscription }       from 'rxjs/Subscription';

@Component({
  template: `

    <h2 *ngIf=plan>Детали плана {{plan.Department()}} за {{plan.year}} год</h2>
    <ul class="items">
      <li *ngFor="let planProject of planProjects"
      [class.selected]="isSelected(planProject)"
        (click)="onSelect(planProject)">
        <span class="badge">{{planProject.id}}</span>{{planProject.project.name}} 
      </li>
    </ul>
    <div style="color:red" *ngIf="error">{{error}}</div>

  `
})
export class PlanDetailComponent implements OnInit, OnDestroy  {
  plan: PlanModel;
  planProjects: PlanProjectModel[];
  error: string;

  private selectedId: number;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PlanService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let id = params['id']; // (+) converts string 'id' to a number
       this.service.getPlan(id)
         .subscribe( plan => { 
           this.plan = plan;
           this.service.getPlanProjects(this.plan.projects)
             .subscribe( planProjects => this.planProjects = planProjects
             ,error => this.error = error );
          },
        error => this.error = error);
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isSelected(planProject: PlanProjectModel) { return planProject.id === this.selectedId; }

  onSelect(planProject: PlanProjectModel) {
    this.router.navigate(['/planproject', planProject.id,'tasks']);
  }

  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/