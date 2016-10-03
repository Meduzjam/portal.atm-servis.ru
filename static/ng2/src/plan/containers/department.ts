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
      >
      </department-list>
  `
})
export class DepartmentPageComponent implements OnInit {

  departments$: Observable<any>;

  constructor(

    private actions: DepartmentActions,
    private store: Store<any>) {

    this.store.dispatch(this.actions.load());
  }

  ngOnInit(){
    
    this.departments$ = this.store.select('444');
    
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/