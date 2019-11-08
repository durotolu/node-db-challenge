const db = require('../data/db-config');

module.exports = {
    addProjects,
    getProjects,
    getProjectById
}

function getProjectById(id) {
    const promises = [db('projects').where({ id }).first(), getProjectTasks(id), getProjectResources(id)];

    return Promise.all(promises).then((results) => {
        let [project, tasks, resources] = results;

        if(project) {
            project.tasks = tasks;
            project.resources = resources;
            return project;
        } else {
            null
        }
    })
};

function addProjects(project) {
    return db('projects').insert(project)
        .then(([id]) => getProjectById(id))
}

function getProjects() {
    return db('projects');
};

function getProjectTasks(project_id) {
    const results = db('tasks')
        .where('projects_id', project_id)
        // .then(tasks => {
        //     tasks.map(task => (task.completed===0) ? task.completed= false: task.completed= true)
        // })
    //console.log(results[0])
    results.then(tasks => {
        tasks.map(task => (task.completed===0) ? task.completed= false: task.completed= true)
    })
    return results
}

function getProjectResources(project_id) {
    return db('resources as r')
        .join('projects_resources as p', 'r.id', 'p.resources_id')
        .select('r.*')
        .where('p.projects_id', project_id)
        //.then(tasks => tasks.map(task => mappers.actionToBody(task)))
}