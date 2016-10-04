import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as redux from '../reducers';

import { DepartmentActions } from '../actions';
import { Department } from '../models';
import { DepartmentListComponent, DepartmentsInput } from '../components';

@Component({
  selector: 'departments-page',
  template: `
    <h2>Перечень отделов</h2>
      
        <department-list 
          [departments]="departments$ | async"
          [selected]="selected$ | async"
          (select)="select($event)"

        >
        </department-list>
      
      <button (click)="load()" [disabled]="loading$ | async" >Обновить</button>


      <button (click)="edit(selected$)" [disabled]="(loading$ || !selected$) | async" >Редактировать</button>

      <div class="error" *ngIf="error$">
        {{error$ | async}}
      </div>
  `
})
export class DepartmentPageComponent implements OnInit {

  departments$: Observable<any>;
  error$: Observable<any>;
  loading$: Observable<any>;
  selected$: Observable<any>;

  constructor(

    private actions: DepartmentActions,
    private store: Store<any>) {

  }

  load(){
    this.store.dispatch(this.actions.get());
  }

  select(item:Department){
    this.store.dispatch(this.actions.selectCurrent(item));
  }

  edit(item:Department){
    this.store.dispatch(this.actions.(item));
  }

  ngOnInit(){

    this.load();
    this.departments$ = this.store.select( state => state.department.departments );
    this.error$ = this.store.select( state => state.department.error );
    this.loading$ = this.store.select( state => state.department.loading );
    this.selected$ = this.store.select( state => state.department.selectedDepartment );

  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/