const db = require("../data/dbConfig");

module.exports = {
    getIds,
    getById,
    addIds
}

function getIds(){
    return db("projects_resources")
};

function getById(id){
    return db("projects_resources")
    .where({ id })
    .first()
};

function addIds(info){
    return db("projects_resources")
    .insert(info)
    .then(ids => {
        return getById(ids[0])
    })
};