import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PlanService }  from './service';
import { PlanProjectTaskModel } from './model';
import { Subscription }       from 'rxjs/Subscription';

@Component({
  template: `
    <h2>Задачи</h2>
    <ul class="items">
      <li *ngFor="let plan of plans"
        [class.selected]="isSelected(plan)"
        (click)="onSelect(plan)">
        <span class="badge">{{plan.id}}</span> {{plan.Department()}} {{plan.year}}
      </li>
    </ul>
    <div style="background-color:red" *ngIf="error">{{error}}</div>
  `
})
export class TaskListComponent implements OnInit, OnDestroy {
  planProjectTasks: PlanProjectTaskModel[];
  error: string;

  private selectedId: number;
  private sub: Subscription;

  constructor(
    private service: PlanService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.selectedId = +params['id'];
        this.service.getPlanProjectTasks()
          .subscribe(
            planProjectTasks => this.planProjectTasks = planProjectTasks,
            error => this.error = error
            );
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isSelected(planProjectTask: PlanProjectTaskModel) { return planProjectTask.id === this.selectedId; }

  onSelect(plan: PlanProjectTaskModel) {
    this.router.navigate(['/plan', plan.id]);
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/