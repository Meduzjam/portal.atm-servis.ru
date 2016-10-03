import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DepartmentActions } from '../actions'
import { RestService } from '../services'

@Injectable()
export class DepartmentEffects {
    constructor (
        private update$: Actions,
        private actions: DepartmentActions,
        private svc: RestService
    ) {}

    @Effect() loadHeroes$ = this.update$
        .ofType(DepartmentActions.LOAD)
        .switchMap(() => this.svc.getDepartments())
        .map(items => this.actions.loadSuccess(items));

/*    @Effect() getHero$ = this.update$
        .ofType(HeroActions.GET_HERO)
        .map<string>(action => action.payload)
        .switchMap(id => this.svc.getHero(id))
        .map(hero => this.heroActions.getHeroSuccess(hero));

    @Effect() saveHero$ = this.update$
        .ofType(HeroActions.SAVE_HERO)
        .map(action => action.payload)
        .switchMap(hero => this.svc.saveHero(hero))
        .map(hero => this.heroActions.saveHeroSuccess(hero));

    @Effect() addHero$ = this.update$
        .ofType(HeroActions.ADD_HERO)
        .map(action => action.payload)
        .switchMap(hero => this.svc.saveHero(hero))
        .map(hero => this.heroActions.addHeroSuccess(hero));

    @Effect() deleteHero$ = this.update$
        .ofType(HeroActions.DELETE_HERO)
        .map(action => action.payload)
        .switchMap(hero => this.svc.deleteHero(hero))
        .map(hero => this.heroActions.deleteHeroSuccess(hero));*/
}