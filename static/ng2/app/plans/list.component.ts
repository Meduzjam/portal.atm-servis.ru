import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import { Subscription }       from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { PlanService }  from './service';
import { PlanModel } from './model';
import { PlansState } from './state';


@Component({
  template: `
    <h2>Планы</h2>
    <ul class="items">
      <li *ngFor="let plan of plan | async"
        [class.selected]="isSelected(plan)"
        (click)="onSelect(plan)">
        <span class="badge">{{plan.id}}</span> {{plan.Department()}} {{plan.year}}
      </li>
    </ul>
    <div style="background-color:red" *ngIf="error">{{error}}</div>
  `
})
export class PlanListComponent implements OnInit, OnDestroy {

  plans: Observable<Array<PlanModel>>;
  selectedPlan: Observable<PlanModel>;

  error: string;

  private selectedId: number;
  private sub: Subscription;

  constructor(
    private service: PlanService,
    private store: Store<PlansState>,
    private route: ActivatedRoute,
    private router: Router) {

    this.plans = service.plans;
    this.selectedPlan = store.select('selectedPlan');
    this.service.getPlans();

  }

  ngOnInit() {



    this.sub = this.route
      .params
      .subscribe(params => {
        this.selectedId = +params['id'];
/*        this.service.getPlans()
          // .then(plans => this.plans = plans);
          .subscribe(
            plans => this.plans = plans,
            error => this.error = error
            );
*/      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isSelected(plan: PlanModel) { return plan.id === this.selectedId; }

  onSelect(plan: PlanModel) {
    this.router.navigate(['/plan', plan.id]);
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/