const db = require('../data/db-config');

module.exports = {
    addProjectsResources
}

function addProjectsResources(projectresource) {
    return db('projects_resources').insert(projectresource);
        //.then(([id]) => getResourceById(id));
};