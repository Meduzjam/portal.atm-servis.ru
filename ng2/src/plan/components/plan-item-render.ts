import { Component, Input } from "@angular/core";



@Component({
	selector: 'sertificate-item-render',
	template: `
		<button>{{sertificate.Type}} {{sertificate.Test()}}</button>
	`

})
export class SertificateItemRender {
	@Input() sertificate;

}