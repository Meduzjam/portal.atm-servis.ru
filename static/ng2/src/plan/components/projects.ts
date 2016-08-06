import { Component, Input } from "@angular/core";
import { ProjectModel } from '../models/project';


@Component({
	selector: 'projects',
	template: `
		<ul>
		  <li *ngFor="let project of projects">
		    {{project.id}} {{project.name}}
		  </li>
		</ul>
	`

})
export class Projects {
	@Input() plan;
	projects: ProjectModel[];


}