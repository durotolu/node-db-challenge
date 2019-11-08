const db = require('../data/db-config')

module.exports = {
    addResources,
    getResources
};

function getResourceById(id) {
    return db('resources').where({ id }).first();
};

function addResources(resource) {
    return db('resources').insert(resource)
        .then(([id]) => getResourceById(id));
};

function getResources() {
    return db('resources');
};