import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PlanModel,PlanProjectModel } from './model';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class PlanService {

  private endpoint_url = `http://127.0.0.1:8000/api/v1`;
  
  constructor(private http: Http) {

  }
    
  getPlans():Observable<PlanModel[]> {
    return this.http.get(this.endpoint_url+'/plan/?format=json')
      .map( res => Array.prototype.map.call( res.json().objects,
        (val) => PlanModel.fromJSON(val) ) 
      ) 
      .catch(this.handleError);
  }

  getPlanProjects(id: number | string):Observable<PlanProjectModel[]> {
    return this.http.get(this.endpoint_url+'/planprojects/?format=json&plan__id='+ +id)
      .map( res => Array.prototype.map.call( res.json().objects,
        (val) => PlanProjectModel.fromJSON(val) ) 
      ) 
      .catch(this.handleError);
  }

  getPlanDetail(id: number | string) {
    return this.getPlans()
      .map(plans => plans.find(plan => plan.id === +id));
  }

  private handleError(error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/