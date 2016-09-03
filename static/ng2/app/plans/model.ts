export class PlanModel implements IPlanModel {
	constructor(
		public id: number,
		public department: string,
		public year: number,
		public projects: string
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
    		case "DE":
    			// code...
    			return "Отдел проектирования";    			
    		default:
    			return "Хрензнает";
    	}
    }
}


export class PlanProjectModel implements IPlanProjectModel{
	constructor(
		public id: number,
		public plan: string,
		public project: ProjectModel,
		public tasks: string
		) {
	}

	static fromJSON(json: IPlanProjectModel): PlanProjectModel {
		
		let obj = Object.create(PlanProjectModel.prototype);
		Object.assign(obj, json);
		obj.project = ProjectModel.fromJSON(json['project']);
		// obj.plan = PlanModel.fromJSON(json['plan']);
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

export class UserModel implements IUserModel{
	constructor(
		public id: number,
		public username: string
		) {
	}

	static fromJSON(json: IUserModel): UserModel {
		
		let obj = Object.create(UserModel.prototype);
		Object.assign(obj, json);
		return obj;
    }

}

export class PlanProjectTaskModel implements IPlanProjectTaskModel{
	constructor(
		public id: number,
		public owner: UserModel,
		public task: TaskModel,
		public status: number,
		public projectplan:string
		) {
	}

	static fromJSON(json: IPlanProjectTaskModel): PlanProjectTaskModel {
		
		let obj = Object.create(PlanProjectTaskModel.prototype);
		Object.assign(obj, json);
		obj.owner = UserModel.fromJSON(json['owner']);
		obj.task = TaskModel.fromJSON( json['task']);
		return obj;

    }

	Status():string{

	/*NEW = 0
	INPROGRESS = 1
	CANCEL = 2
	COMPLETE =3
	CLOSED = 4

	TS_CHOICES = (
		(NEW, 'Ожидает исполнения'),
		(INPROGRESS, 'В работе'),
		(CANCEL, 'Отменена'),
		(COMPLETE, 'Ожидает подтверждения'),
		(CLOSED, 'Завершена'),

	*/
    	switch (this.status) {
    		case 0:
    			return "Ожидает исполнения";
    		case 1:
    			// code...
    			return "В работе";
    		case 2:
    			// code...
    			return "Отменена";
    		case 3:
    			// code...
    			return "Ожидает подтверждения";
    		case 4:
    			// code...
    			return "Завершена";
    		default:
    			return "Не известно";
    	}
    }

}


export interface IUserModel {
	id: number,
	username: string, 
}

export interface IPlanProjectTaskModel {
	id: number,
	owner: UserModel, 
	task: TaskModel,
	status:number,
	projectplan:string
}


export interface IProjectModel {
	id: number,
	name: string, 
}

export interface IPlanModel {
	id: number,
	department: string, 
	year: number,
	projects: string,
}

export interface IPlanProjectModel {
	id: number,
	plan: string, 
	project: ProjectModel,
	tasks: string,
}

export interface ITaskModel {
	id: number,
	name: string, 
	parent: ITaskModel,
}