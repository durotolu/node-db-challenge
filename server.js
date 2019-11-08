const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const ResourcesRouter = require('./resources/resources-router');
const ProjectsRouter = require('./projects/projects-router');
const TasksRouter = require('./tasks/tasks-router');
const ProjectsResourcesRouter = require('./projects_resources/ProjectsResources-Router')

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/resources', ResourcesRouter);
server.use('/api/projects', ProjectsRouter);
server.use('/api/tasks', TasksRouter);

server.use('/api/projects_resources', ProjectsResourcesRouter);

server.get('/', (req, res) => {
    res.send('testing!!!')
})

module.exports = server;