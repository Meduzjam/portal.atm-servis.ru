import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Department } from '../../models';
import { DepartmentDetailComponent, DepartmentInput, SelectOutput, DeleteOutput } from './detail';

export type DepartmentsInput = Department[];

@Component({
  selector: 'department-list',
  template: `
    <ul class="items">
      <li *ngFor="let department of departments">
        <department-detail 
          [department]="department"
          (select)="_select($event)"
          (delete)="_delete($event)"
          >
        </department-detail>
      </li>
    </ul>
  `
})
export class DepartmentListComponent {
  @Input() departments: DepartmentsInput;
  @Output() select = new EventEmitter<SelectOutput>();
  @Output() delete = new EventEmitter<DeleteOutput>();

  _select(item: Department){

    this.select.emit(item);

  }

  _delete(item: Department){

    this.delete.emit(item);

  }  

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/