import { Component, OnInit } from "@angular/core";
import { SertificatesService } from '../services/sertificates';
import { SertificateItemRender } from './sertificate-item-render';
import { SertificateModel } from '../models/sertificate';

@Component({
	selector: 'sertificates',
	directives: [SertificateItemRender],
	template: `
		<button (click)="getSertificates()">Обновить</button>
		<button (click)="LogClick()">Лог</button>

		<ul>
		  <li *ngFor="let sertificate of sertificates" (click)="setCurrentSertificate(sertificate)">
		    <sertificate-item-render [sertificate]="sertificate"></sertificate-item-render>
		  </li>
		</ul>


        <div *ngIf="currentSertificate">
          <h2>Детали о сертефикате: {{currentSertificate.Title}}</h2>
          <div>
            <label>id: </label>{{currentSertificate.id}}
          </div>
        </div>

		<div *ngIf="error">{{error.status}}</div>

	`
})
export class Sertificates implements OnInit {

	sertificates: SertificateModel[];
	currentSertificate: SertificateModel;	
	error: any;

	constructor(public sertificatesService: SertificatesService) { }

	getSertificates() {

		this.error = null;

		this.sertificatesService
			.getSertificates()
			.then(sertificates => { 
					this.sertificates = sertificates; 
					this.currentSertificate = this.sertificates[0] || undefined 
					})
			.catch(this.OnError.bind(this))
	}

	setCurrentSertificate(sertificate: SertificateModel) {
		this.currentSertificate = sertificate || undefined;
	}




	OnError(error: any) {

		this.error = error;
		console.error(this.error);
	}



	ngOnInit() {
		this.getSertificates();
	}

	LogClick(){
		console.log(this.sertificates);
		console.log(this.currentSertificate);
	}
	

}