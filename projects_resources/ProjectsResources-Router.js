const express = require('express');
const ProjectsResources = require('./ProjectsResources-Model');

const router = express.Router();

router.post('/', (req, res) => {
    ProjectsResources.addProjectsResources(req.body)
        .then(projectresource => {
            res.status(201).json({ created: projectresource});
        })
        .catch(err => {
            res.status(500).json({'Failed to insert new projectresource info': err.message });
        })
})

module.exports = router;