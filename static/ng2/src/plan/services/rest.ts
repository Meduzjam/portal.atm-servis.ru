import { Injectable } from '@angular/core';
import { Http, Response,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Department, IDepartment } from '../models';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class RestService {

  private endpoint_url = `http://127.0.0.1:8000`;
  
  constructor(private http: Http) {
  }

  getDepartments(): Observable<Array<Department>> {
    const api = '/api/v1/department/';
    let parameters = new URLSearchParams();
    parameters.set('format', 'json');
    return this.http.get(`${this.endpoint_url}${api}`, { search : parameters })
      .map(res => Array.prototype.map.call( res.json().objects, 
        (obj:IDepartment) => Department.fromJSON(obj)) );
  }
  
  saveDepartment(department:Department) {
    const api = '/api/v1/department/';
    let parameters = new URLSearchParams();
    parameters.set('format', 'json');
    if (department.id === 0) {
      return this.http.post(`${this.endpoint_url}${api}`, department, { search : parameters })
        .map(res => Array.prototype.map.call( res.json().objects, 
          (obj:IDepartment) => Department.fromJSON(obj)) );
    } else {
      return this.http.put(`${this.endpoint_url}${api}`, department, { search : parameters })
        .map(res => Array.prototype.map.call( res.json().objects, 
          (obj:IDepartment) => Department.fromJSON(obj)) );
    }
  }

/*
  getPlans() {
    const api = '/api/v1/plan';
    let parameters = new URLSearchParams();
    parameters.set('format', 'json');

    this.http.get(this.endpoint_url + api, { search : parameters })
      .map(res => Array.prototype.map.call( res.json().objects, 
        (val) => PlanModel.fromJSON(val)) )
      .map(payload => Actions.addPlans(payload)  )
      .subscribe(action => this.store.dispatch(action));
*/
/*      .map(res => res.json())
      .map(payload => ({ type: 'ADD_ITEMS', payload }))
      .subscribe(action => this.store.dispatch(action));*/

  


    
/*  getPlans():Observable<PlanModel[]> {
    let parameters = new URLSearchParams();
    parameters.set('format', 'json');

    return this.http.get(this.endpoint_url+'/api/v1/plan',{ search : parameters })
      .map( res => Array.prototype.map.call( res.json().objects,
        (val) => PlanModel.fromJSON(val) ) 
      ) 
      .catch(this.handleError);
  }*/

 /* getPlan(id: number | string):Observable<PlanModel> {
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

  getPlanProject(id: number | string):Observable<PlanProjectModel> {
    let parameters = new URLSearchParams();
    parameters.set('format', 'json');

    return this.http.get(this.endpoint_url+'/api/v1/planprojects/'+id+'/',{ search : parameters })
      .map( res => PlanProjectModel.fromJSON( res.json() )
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
  }*/

  /*getPlanDetail(id: number | string) {
    return this.getPlans()
      .map(plans => plans.find(plan => plan.id === +id));
  }*/


/*  private handleError(error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      //console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }*/

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/