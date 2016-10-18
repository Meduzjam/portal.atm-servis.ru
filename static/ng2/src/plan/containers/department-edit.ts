import {Component, EventEmitter, Input, OnInit, OnDestroy, Output} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { go, replace, search, show, back, forward } from '@ngrx/router-store';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

import * as redux from '../reducers';

import { DepartmentActions } from '../actions';
import { Department } from '../models';
import { DepartmentForm } from '../components';



@Component({
    selector: 'department-edit-page',
    template: `
        <department-form
            [department]="department$ | async"
            
            (save)="save($event)"
        ></department-form>

        <div style="color:red" *ngIf="error$ | async">
            Ошибка: {{ error$ | async}}
        </div>
    `,
    
})
export class DepartmentEditPageComponent implements OnInit, OnDestroy {
    id: number;
    department$: Observable<any>;
    error$: Observable<any>;
    loading$: Observable<any>;

    @Output() close = new EventEmitter();

    constructor(
        private store: Store<any>,
        private actions: DepartmentActions,
        private route: ActivatedRoute,
        private router: Router) {

      this.department$ = store.select(state => state.department.department);
      this.loading$ = this.store.select( state => state.department.loading );
      this.error$ = this.store.select( state => state.department.error );

    }

    ngOnInit() {


    	this.route.params.forEach((params: Params) => {
        	this.id = +params['id'];
	    });

		  if (this.id) {
			  this.store.dispatch(this.actions.get(this.id));
		  } else {
  			this.store.dispatch(this.actions.resetBlank());
  		}

    }

    ngOnDestroy() {
        
    }

    save(department: Department) {
        if (department.id === 0) {
          this.store.dispatch(this.actions.add(department));
        } else {
          this.store.dispatch(this.actions.edit(department));
        }
        
    }
}