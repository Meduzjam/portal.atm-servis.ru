export class PlanModel {
	constructor(
		public id: number,
		public department: string,
		public year: number
		) {
	}

	static fromJSON(json: IPlanModel[]): PlanModel[] {
		
		return json.map(
			function(data: IPlanModel) {
				let obj = Object.create(PlanModel.prototype);
				Object.assign(obj, data);
				return obj;
			})
    }

    Test(){
		return "all good";
    }

}

interface IPlanModel {
	id: number,
	department: string, 
	year: number,
}