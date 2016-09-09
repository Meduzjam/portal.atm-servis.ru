import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { PlanService }  from './service';
import { PlanProjectTaskModel, PlanProjectModel } from './model';

@Component({
  selector: 'project-task-form',
  template: `
  	<form #myForm="ngForm" (ngSubmit)="onSubmit()">
		
			<div>
				<label for=""></label>
				<input type="text" id=""
					[(ngModel)] = planProjectTask
				>
			</div>

  	</form>
  `
})
export class HeroFormComponent implements OnInit, OnDestroy {
	@Input() planProjectTask:PlanProjectTaskModel;
  @Input() planProjectModel: PlanProjectModel;

  error: string;

  private sub: Subscription;

  constructor(
    private service: PlanService,
    private route: ActivatedRoute,
    private router: Router) {}

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

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


}