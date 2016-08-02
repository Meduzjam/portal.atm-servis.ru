export class PlanModel {
	constructor(
		private Title: string,
		private Type: string,
		private id: number,
		private File: string
		) {
	}

	static fromJSON(json: IPlanModel[]): PlanModel[] {
		
		return json.map(
			function(el: IPlanModel) {
				let obj = Object.create(PlanModel.prototype);
				Object.assign(obj, el);
				return obj;
			})
    }

    Test(){
		return "all good";
    }

}

interface IPlanModel {
	Title: string, 
	Type: string,
	id: number,
	File: number
}