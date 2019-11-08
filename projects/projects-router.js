const express = require('express');
const Projects = require('./projects-model');

const router = express.Router();

router.post('/', (req, res) => {
    Projects.addProjects(req.body)
        .then(project => {
            (project.completed===0) ? project.completed= false: project.completed= true
            res.status(201).json({ created: project});
        })
        .catch(err => {
            res.status(500).json({'Failed to insert new project info': err.message });
        })
})

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            projects.map(project => (project.completed===0) ? project.completed= false: task.completed= true)
            res.json(projects)
        })
        .catch(err =>{
            res.status(500).json({ 'Failed to get projects': err.message })
        })
});

module.exports = router;