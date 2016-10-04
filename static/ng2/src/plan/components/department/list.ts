import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Department } from '../../models';
import { DepartmentDetailComponent, DepartmentInput, SelectOutput } from './detail';

export type DepartmentsInput = Department[];

@Component({
  selector: 'department-list',
  template: `
    <ul class="items">
      <li *ngFor="let department of departments">
        <department-detail 
          [department]="department"
          [selected]="isSelected(department)"
          (select)="_select($event)"
          >
        </department-detail>
      </li>
    </ul>
  `
})
export class DepartmentListComponent {
  @Input() departments: DepartmentsInput;
  @Input() selected: DepartmentInput;
  @Output() select = new EventEmitter<SelectOutput>();

  _select(item: Department){

    this.select.emit(item);

  }

  isSelected(item: Department){
    return this.selected == item;
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/