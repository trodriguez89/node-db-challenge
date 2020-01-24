const db = require("../data/dbConfig");

module.exports = {
    getProjects,
    getProjectById,
    newProject
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