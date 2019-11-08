const express = require('express');
const Tasks = require('./tasks-model');

const router = express.Router();

router.post('/', (req, res) => {
    Tasks.addTasks(req.body)
        .then(task => {
            (task.completed===0) ? task.completed= false: task.completed= true;
            res.status(201).json({ created: task});
        })
        .catch(err => {
            res.status(500).json({'Failed to insert new task info': err.message });
        })
})

router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(tasks => {
            tasks.map(task => (task.completed===0) ? task.completed= false: task.completed= true)
            res.json(tasks)
        })
        .catch(err =>{
            res.status(500).json({ 'Failed to get task': err.message })
        })
})

module.exports = router;