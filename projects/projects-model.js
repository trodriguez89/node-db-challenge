const db = require("../data/dbConfig");

module.exports = {
    getProjects,
    getProjectById,
    newProject,
    getProjectTasks,
    newTask
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
    .select("projects.project_name","tasks.task_name", "tasks.description", "tasks.completed")
    .where("projects.id", id)
}

function newTask(task, id){
    return db("tasks")
    .insert({ task_name: task.task_name, description: task.description, completed: task.completed, project_id: id})
};