"use strict";
var PlanModel = (function () {
    function PlanModel(id, department, year, projects) {
        this.id = id;
        this.department = department;
        this.year = year;
        this.projects = projects;
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
            case "DE":
                // code...
                return "Отдел проектирования";
            default:
                return "Хрензнает";
        }
    };
    return PlanModel;
}());
exports.PlanModel = PlanModel;
var PlanProjectModel = (function () {
    function PlanProjectModel(id, plan, project, tasks) {
        this.id = id;
        this.plan = plan;
        this.project = project;
        this.tasks = tasks;
    }
    PlanProjectModel.fromJSON = function (json) {
        var obj = Object.create(PlanProjectModel.prototype);
        Object.assign(obj, json);
        obj.project = ProjectModel.fromJSON(json['project']);
        // obj.plan = PlanModel.fromJSON(json['plan']);
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
var UserModel = (function () {
    function UserModel(id, username) {
        this.id = id;
        this.username = username;
    }
    UserModel.fromJSON = function (json) {
        var obj = Object.create(UserModel.prototype);
        Object.assign(obj, json);
        return obj;
    };
    return UserModel;
}());
exports.UserModel = UserModel;
var PlanProjectTaskModel = (function () {
    function PlanProjectTaskModel(id, owner, task, status, projectplan) {
        this.id = id;
        this.owner = owner;
        this.task = task;
        this.status = status;
        this.projectplan = projectplan;
    }
    PlanProjectTaskModel.fromJSON = function (json) {
        var obj = Object.create(PlanProjectTaskModel.prototype);
        Object.assign(obj, json);
        obj.owner = UserModel.fromJSON(json['owner']);
        obj.task = TaskModel.fromJSON(json['task']);
        return obj;
    };
    PlanProjectTaskModel.prototype.Status = function () {
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
    };
    return PlanProjectTaskModel;
}());
exports.PlanProjectTaskModel = PlanProjectTaskModel;
//# sourceMappingURL=model.js.map