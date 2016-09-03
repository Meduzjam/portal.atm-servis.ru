import { Injectable } from '@angular/core';
import { Http, Response,URLSearchParams } from '@angular/http';
import { PlanModel,PlanProjectModel,PlanProjectTaskModel } from './model';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class PlanService {

  private endpoint_url = `http://127.0.0.1:8000`;
  
  constructor(private http: Http) {

  }
    
  getPlans():Observable<PlanModel[]> {
    let parameters = new URLSearchParams();
    parameters.set('format', 'json');

    return this.http.get(this.endpoint_url+'/api/v1/plan',{ search : parameters })
      .map( res => Array.prototype.map.call( res.json().objects,
        (val) => PlanModel.fromJSON(val) ) 
      ) 
      .catch(this.handleError);
  }

  getPlan(id: number | string):Observable<PlanModel> {
    let parameters = new URLSearchParams();
    parameters.set('format', 'json');

    return this.http.get(this.endpoint_url+'/api/v1/plan/'+id+'/',{ search : parameters })
      .map( res => PlanModel.fromJSON( res.json() )
      ) 
      .catch(this.handleError);
  }  

  getPlanProjects(uri: string):Observable<PlanProjectModel[]> {
    let parameters = new URLSearchParams();
    parameters.set('format', 'json');
    // parameters.set('plan__id', id.toString());

    return this.http.get(this.endpoint_url+uri,{ search : parameters })
      .map( res => Array.prototype.map.call( res.json().objects,
        (val) => PlanProjectModel.fromJSON(val) ) 
      ) 
      .catch(this.handleError);
  }

  getPlanProjectTasks(uri: string):Observable<PlanProjectTaskModel[]> {
    let parameters = new URLSearchParams();
    parameters.set('format', 'json');
    // parameters.set('plan__id', id.toString());

    return this.http.get(this.endpoint_url+uri,{ search : parameters })
      .map( res => Array.prototype.map.call( res.json().objects,
        (val) => PlanProjectTaskModel.fromJSON(val) ) 
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