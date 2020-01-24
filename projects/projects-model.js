const db = require("../data/dbConfig");

module.exports = {
    getProjects,
    getProjectById,
    newProject,
    getProjectTasks
}

function getProjects(){
    return db("projects");
};

function getProjectById(id){
    return db("projects")
    .where({ id })
    .first();
};

function newProject(info){
    return db("projects")
    .insert(info)
    .then(ids => {
        return getProjectById(ids[0])
    })
};

function getProjectTasks(id){
    return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .select("tasks.task_name", "tasks.description", "tasks.completed")
    .where("projects.id", id)
}