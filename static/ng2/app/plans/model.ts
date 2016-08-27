export class PlanModel implements IPlanModel {
	constructor(
		public id: number,
		public department: string,
		public year: number
		) {
	}

	static fromJSON(json: IPlanModel): PlanModel {
		
		let obj = Object.create(PlanModel.prototype);
		Object.assign(obj, json);
		return obj;

    }

    Department():string{

    	switch (this.department) {
    		case "PG":
    			return "Отдел программирования";
    		case "IM":
    			// code...
    			return "Отдел внедрения";
    		default:
    			return "Хрензнает";
    	}
    }
}


export class PlanProjectModel implements IPlanProjectModel{
	constructor(
		public id: number,
		public plan: PlanModel,
		public project: ProjectModel,
		// public task: TaskModel[]
		) {
	}

	static fromJSON(json: IPlanProjectModel): PlanProjectModel {
		
		let obj = Object.create(PlanProjectModel.prototype);
		Object.assign(obj, json);
		obj.project = ProjectModel.fromJSON(json['project']);
		obj.plan = PlanModel.fromJSON(json['plan']);
		// obj.task = json['task'].map( (val) => TaskModel.fromJSON(val) );
		return obj;

    }
}


export class ProjectModel implements IProjectModel{
	constructor(
		public id: number,
		public name: string
		) {
	}

	static fromJSON(json: IProjectModel): ProjectModel {
		
		let obj = Object.create(ProjectModel.prototype);
		Object.assign(obj, json);
		return obj;

    }
}

export class TaskModel implements ITaskModel{
	constructor(
		public id: number,
		public name: string, 
		public parent: TaskModel
		) {
	}

	static fromJSON(json: ITaskModel): TaskModel {
		
		let obj = Object.create(TaskModel.prototype);
		Object.assign(obj, json);
		return obj;
    }

}

export interface IProjectModel {
	id: number,
	name: string, 
}

export interface IPlanModel {
	id: number,
	department: string, 
	year: number,
}

export interface IPlanProjectModel {
	id: number,
	plan: PlanModel, 
	project: ProjectModel,
	// task:TaskModel[]
}

export interface ITaskModel {
	id: number,
	name: string, 
	parent: ITaskModel,
}