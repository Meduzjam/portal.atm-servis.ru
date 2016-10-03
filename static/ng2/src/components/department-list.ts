import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DepartmentModel } from '../models';
import { DepartmentDetailComponent, SelectOutput } from './department-detail';

export type DepartmentsInput = DepartmentModel[];

@Component({
  selector: 'department-list',
  template: `
    <h2>Перечень отделов</h2>
    <ul class="items">
      <li *ngFor="let department of departments">
        <department-detail 
          [department]="department"
          (select)="select($event)"
          >
        </department-detail>
      </li>
    </ul>

  `
})
export class DepartmentListComponent {
  @Input() departments: DepartmentsInput;
  @Output() select = new EventEmitter<SelectOutput>();

  selected(obj: DepartmentModel){

    console.dir('Был выбран {obj}');
    this.select.emit(obj);

  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/