import {Component, EventEmitter, Input, OnInit, OnDestroy, Output} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
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
            (back)="goBack()"
            (save)="save($event)"
        ></department-form>
    `,
    
})
export class DepartmentEditPageComponent implements OnInit, OnDestroy {
    id: number;
    department$: Observable<any>;
    navigated = false;

    @Output() close = new EventEmitter();

    constructor(
        private store: Store<any>,
        private actions: DepartmentActions,
        private route: ActivatedRoute,
        private router: Router) {

      this.department$ = store.select(state => state.department.department);
    }

    ngOnInit() {


    	this.route.params.forEach((params: Params) => {
        	this.id = +params['id'];
	    });

		if (this.id) {
			this.store.dispatch(this.actions.get(this.id));
			this.navigated = true;
		} else {
			this.store.dispatch(this.actions.resetBlank());
			this.navigated = false;
		}

    }

    ngOnDestroy() {
        
    }

    goBack(savedDepartment: Department = null) {
        this.close.emit(savedDepartment);
        if (this.navigated) { window.history.back(); }
    }

    save(department: Department) {
        if (department.id === 0) {
            this.store.dispatch(this.actions.add(department));
        } else {
            this.store.dispatch(this.actions.edit(department));
        }
        this.goBack(department);
    }
}