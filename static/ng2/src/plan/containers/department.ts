import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
          (select)="edit($event)"

        >
        </department-list>
      
      <button (click)="load()" [disabled]="loading$ | async" >Обновить</button>


      <button (click)="edit(null)">Новый</button>

      <div class="error" *ngIf="error$">
        {{error$ | async}}
      </div>
  `
})
export class DepartmentPageComponent implements OnInit {

  departments$: Observable<any>;
  department$: Observable<any>;
  error$: Observable<any>;
  loading$: Observable<any>;
  // selected$: Observable<any>;

  constructor(
    private store: Store<any>,
    private actions: DepartmentActions,
    private router: Router,
    private route: ActivatedRoute) {
  }

  load(){
    this.store.dispatch(this.actions.getList());
  }

  getDepartment(id:number){
    this.store.dispatch(this.actions.get(id));
  }

  edit(item:Department){
    this.router.navigate(['/department', item?item.id:0]);
  }

  ngOnInit(){

    this.load();
    this.departments$ = this.store.select( state => state.departments.departments );
    this.error$ = this.store.select( state => state.departments.error );
    this.loading$ = this.store.select( state => state.departments.loading );
    this.department$ = this.store.select( state => state.department.department );

  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/