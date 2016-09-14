import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }  from 'rxjs/Subscription';

import { PlanService }  from './service';
import { PlanProjectTaskModel, PlanProjectModel } from './model';
import { TaskFormComponent }    from './task-form.component';

@Component({
  template: `
    <h2 *ngIf=planProject>Задачи плана для проекта {{planProject.project.name}}</h2>
    <ul class="items">
      <li *ngFor="let planProjectTask of planProjectTasks"  
        (click)="onSelect(planProjectTask)"
        [class.selected]="isSelected(planProjectTask)">
        <span class="badge">{{planProjectTask.id}}</span> {{planProjectTask.task.name}}, {{planProjectTask.Status()}}, {{planProjectTask.owner.username}}
      </li>
    </ul>
    
    <div *ngIf=selectedPlanProjectTasks>
      <task-form [task]="selectedPlanProjectTasks.task"></task-form>
    </div>

    <div style="color:red" *ngIf="error">{{error}}</div>


  `
})
export class ProjectTaskListComponent implements OnInit, OnDestroy {
  planProject: PlanProjectModel;
  planProjectTasks: PlanProjectTaskModel[];
  private selectedPlanProjectTasks: PlanProjectTaskModel;
  private error: string;
  private sub: Subscription;

  constructor(
    private service: PlanService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.service.getPlanProject(id)
        .subscribe( planProject => {
          this.planProject = planProject;
          this.service.getPlanProjectTasks(this.planProject.tasks)
             .subscribe( planProjectTasks => this.planProjectTasks = planProjectTasks
               ,error => this.error = error);
        },
        error => this.error = error
            );
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isSelected(planProjectTask: PlanProjectTaskModel) { 
    return planProjectTask === this.selectedPlanProjectTasks; 
  }

  onSelect(planProjectTask: PlanProjectTaskModel) {
    this.selectedPlanProjectTasks = planProjectTask;
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/