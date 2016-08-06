import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { PlanModel} from "../models/plan"

import 'rxjs/add/operator/toPromise';


@Injectable()
export class PlanService {
    
	private endpoint_url = 'http://127.0.0.1:8000/api/v1/plan/?format=json';
	
	constructor(private http: Http) {

	}
    
	getPlans(): Promise<PlanModel[]> {
		return this.http.get(this.endpoint_url)
			.toPromise()
			.then(this.extractData) 
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		return PlanModel.fromJSON(res.json().objects) || {};
	}

	private handleError(error: any) {
		console.error('ОШИБКА', error);
		return Promise.reject(error.message || error);
	}


}