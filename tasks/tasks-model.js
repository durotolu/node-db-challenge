const db = require('../data/db-config')

module.exports = {
    addTasks,
    getTasks
};

function getTaskById(id) {
    return db('tasks').where({ id }).first();
};

function addTasks(task) {
    return db('tasks').insert(task)
        .then(([id]) => getTaskById(id));
};

function getTasks() {
    return db('tasks as t')
        .join('projects as p', 't.projects_id', 'p.id')
        .select('p.name as project_name', 'p.description as project_description', 't.*');
};