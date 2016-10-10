import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Department } from '../../models';

@Component({
    selector: 'department-form',
    template: `

		<div *ngIf="department">
    	<h2>{{department.name}}</h2>
    	<div>
      	<label>id: </label>{{department.id}}
    	</div>
    	<div>
        <label>название: </label>
        <input [(ngModel)]="department.name" placeholder="name" />
        <label>код: </label>
        <input [(ngModel)]="department.code" placeholder="code" />
    	</div>
    	<button (click)="back.emit()">Назад</button>
    	<button (click)="save.emit(department)">Сохранить</button>
	  </div>

    `,
    styles: [`
    label {
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer; cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc; 
  cursor: auto;
}
    `]
})
export class DepartmentForm {
    _department:Department;

    @Input() 
    set department(value) {
        this._department = Object.assign({}, value);
    }
    get department() {
        return this._department;
    }

    @Output() back = new EventEmitter();
    @Output() save = new EventEmitter();
}