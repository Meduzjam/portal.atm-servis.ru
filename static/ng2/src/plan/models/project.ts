export class ProjectModel {
	constructor(
		private id: number,
		private name: string
		) {
	}

	static fromJSON(json: IProjectModel[]): ProjectModel[] {
		
		return json.map(
			function(data: IProjectModel) {
				let obj = Object.create(ProjectModel.prototype);
				Object.assign(obj, data);
				return obj;
			})
	}

}

interface IProjectModel {
	id: number,
	name: string, 
}