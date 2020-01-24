const db = require("../data/dbConfig");

module.exports = {
    getResources,
    newResource
}

function getResources(){
    return db("resources")
};

function getResourceById(id){
    return db("resources")
    .where({ id })
    .first();
}

function newResource(resource){
    return db("resources")
    .insert(resource)
    .then(ids => {
        return getResourceById(ids[0])
    })
};