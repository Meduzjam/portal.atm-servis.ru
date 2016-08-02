import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { SertificateModel} from "../models/sertificate"

import 'rxjs/add/operator/toPromise';


@Injectable()
export class SertificatesService {
    
	private endpoint_url = 'http://127.0.0.1:8000/api/v1/sertificates/?format=json';
	
	constructor(private http: Http) {

	}
    
	getSertificates(): Promise<SertificateModel[]> {
		return this.http.get(this.endpoint_url)
			.toPromise()
			.then(this.extractData) 
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		return SertificateModel.fromJSON(res.json().objects) || {};
	}

	private handleError(error: any) {
		console.error('ОШИБКА', error);
		return Promise.reject(error.message || error);
	}


}