"use strict";
var ProjectModel = (function () {
    function ProjectModel(id, name) {
        this.id = id;
        this.name = name;
    }
    ProjectModel.fromJSON = function (json) {
        return json.map(function (data) {
            var obj = Object.create(ProjectModel.prototype);
            Object.assign(obj, data);
            return obj;
        });
    };
    return ProjectModel;
}());
exports.ProjectModel = ProjectModel;
//# sourceMappingURL=project.js.map