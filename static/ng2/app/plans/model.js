"use strict";
var PlanModel = (function () {
    function PlanModel(id, department, year) {
        this.id = id;
        this.department = department;
        this.year = year;
    }
    PlanModel.fromJSON = function (json) {
        var obj = Object.create(PlanModel.prototype);
        Object.assign(obj, json);
        return obj;
    };
    PlanModel.prototype.Department = function () {
        switch (this.department) {
            case "PG":
                return "Отдел программирования";
            case "IM":
                // code...
                return "Отдел внедрения";
            default:
                return "Хрензнает";
        }
    };
    return PlanModel;
}());
exports.PlanModel = PlanModel;
var PlanProjectModel = (function () {
    function PlanProjectModel(id, plan, project) {
        this.id = id;
        this.plan = plan;
        this.project = project;
    }
    PlanProjectModel.fromJSON = function (json) {
        var obj = Object.create(PlanProjectModel.prototype);
        Object.assign(obj, json);
        obj.project = ProjectModel.fromJSON(json['project']);
        obj.plan = PlanModel.fromJSON(json['plan']);
        // obj.task = json['task'].map( (val) => TaskModel.fromJSON(val) );
        return obj;
    };
    return PlanProjectModel;
}());
exports.PlanProjectModel = PlanProjectModel;
var ProjectModel = (function () {
    function ProjectModel(id, name) {
        this.id = id;
        this.name = name;
    }
    ProjectModel.fromJSON = function (json) {
        var obj = Object.create(ProjectModel.prototype);
        Object.assign(obj, json);
        return obj;
    };
    return ProjectModel;
}());
exports.ProjectModel = ProjectModel;
var TaskModel = (function () {
    function TaskModel(id, name, parent) {
        this.id = id;
        this.name = name;
        this.parent = parent;
    }
    TaskModel.fromJSON = function (json) {
        var obj = Object.create(TaskModel.prototype);
        Object.assign(obj, json);
        return obj;
    };
    return TaskModel;
}());
exports.TaskModel = TaskModel;
//# sourceMappingURL=model.js.map