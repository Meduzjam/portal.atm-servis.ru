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
            [department]="hero | async"
            (back)="goBack()"
            (save)="save($event)"
        ></rx-hero-form>
    `,
    
})
export class DepartmentEdit implements OnInit, OnDestroy {
    idSub: Subscription;
    department: Observable<any>;
    navigated = false;

    @Output() close = new EventEmitter();

    constructor(
        private store: Store<any>,
        private route: ActivatedRoute,
        private heroActions: DepartmentActions,
        private router: Router
    ) {
        this.department = store.select('hero');
    }

    ngOnInit() {
        this.idSub = this.route.params
            .select<string>('id')
            .subscribe(id => {
                if (id) {
                    this.store.dispatch(this.heroActions.getHero(id));
                    this.navigated = true;
                } else {
                    this.store.dispatch(this.heroActions.resetBlankHero());
                    this.navigated = false;
                }
            });
    }

    ngOnDestroy() {
        this.idSub.unsubscribe();
    }

    goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);
        if (this.navigated) { window.history.back(); }
    }

    save(hero) {
        if (hero.id === 0) {
            this.store.dispatch(this.heroActions.addHero(hero));
        } else {
            this.store.dispatch(this.heroActions.saveHero(hero));
        }
        this.goBack(hero);
    }
}