const db = require('../data/db-config');

module.exports = {
    addProjects,
    getProjects
}

function getProjectById(id) {
    return db('projects').where({ id }).first();
};

function addProjects(project) {
    return db('projects').insert(project)
        .then(([id]) => getProjectById(id))
}

function getProjects() {
    return db('projects');
};