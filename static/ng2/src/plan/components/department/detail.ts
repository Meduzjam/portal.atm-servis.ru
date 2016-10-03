import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Department } from '../../models';

export type DepartmentInput = Department;
export type SelectOutput = Department;

@Component({
  selector: 'department-detail',
  template: `

    <div *ngIf="department">
      <button (click)="select.emit(department)">{{ id }} - {{ name }} - {{ code }}</button>
    </div>
  `
})
export class DepartmentDetailComponent  {
  @Input() department: DepartmentInput;
  @Output() select = new EventEmitter<SelectOutput>();


  get id() {
    return this.department.id;
  }

  get name() {
    return this.department.name;
  }

  get code() {
    return this.department.code;
  }

  
}
