import { Component, OnInit } from "@angular/core";
import { PlanService } from '../services/plan';
import { PlanItemRender } from './plan-item-render';
import { PlanModel } from '../models/plan';

@Component({
	selector: 'plans',
	directives: [PlanItemRender],
	template: `
		<button (click)="getPlan()">Обновить</button>
		<button (click)="LogClick()">Лог</button>

		<ul>
		  <li *ngFor="let plan of plans">
		    <a (click)="setCurrentPlan(plan)">{{plan.id}} {{plan.department}} {{plan.year}}</a>
		  </li>
		</ul>


        <div *ngIf="currentPlan">
          <h2>Детали плана</h2>
          <div>

            <label>id: </label>{{currentPlan.id}}
			<label>Подразделение: </label>{{currentPlan.department}}
            
          </div>
        </div>

		<div *ngIf="error">Ошибка: {{error.status}} {{error.statusText}}</div>

	`
})
export class Plans implements OnInit {

	plans: PlanModel[];
	currentPlan: PlanModel;	
	error: any;

	constructor(private planService: PlanService) { }

	getPlan() {

		this.error = null;

		this.planService
			.getPlans()
			.then(plans => { 
					this.plans = plans; 
					this.currentPlan = this.plans[0] || undefined 
					})
			.catch(this.OnError.bind(this))
	}

	setCurrentPlan(plan: PlanModel) {
		this.currentPlan = plan || undefined;
	}




	OnError(error: any) {

		this.error = error;
		console.error(this.error);
	}



	ngOnInit() {
		this.getPlan();
	}

	LogClick(){
		console.log(this.plans);
		console.log(this.currentPlan);
	}
	
}