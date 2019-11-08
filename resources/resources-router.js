const express = require('express');
const Resources = require('./resources-model');

const router = express.Router();

router.post('/', (req, res) => {
    Resources.addResources(req.body)
        .then(resource => {
            res.status(201).json({ created: resource});
        })
        .catch(err => {
            res.status(500).json({'Failed to insert new resource info': err.message });
        })
})

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(err =>{
            res.status(500).json({ 'Failed to get resource': err.message })
        })
})

module.exports = router;