export interface IDepartment {
	id: number,
	name: string, 
	code: string, 
}

export class Department implements IDepartment{
	constructor(
		public id: number,
		public name: string,
		public code: string
		) {
	}

	static fromJSON(json: IDepartment): Department {
		
		let obj = Object.create(Department.prototype);
		Object.assign(obj, json);
		return obj;

    }
}