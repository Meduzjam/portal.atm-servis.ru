import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
  } from '@angular/forms';

import { TaskModel } from './model';

@Component({
  selector: 'task-form',
  inputs:['task'],
  template: `
  	<form [formGroup]="myForm" 
          (ngSubmit)="onSubmit(myForm.value)">
		
			<div>
				<label for=""></label>
				<input type="text" 
          id="taskNameInput"
          [formControl]="myForm.controls['taskName']"
					[(ngModel)] = "task.name"
				>
			</div>
      <button type="submit">Submit</button>
  	</form>
  `
})
export class TaskFormComponent implements OnInit, OnDestroy {
  myForm: FormGroup;

  task:TaskModel;
  
  constructor(
    fb: FormBuilder) {

      this.myForm = fb.group({
        'taskName': ['', Validators.required]
      });
  }

  onSubmit() {
  }


  ngOnInit() {
  }

  ngOnDestroy() {
  }


}