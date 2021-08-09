const express = require('express');

const {auth,isAdmin} = require('../middleware/auth');
const { saveWorker,
    getAllWorkers,
    updateWorker,
    deletWorker,
    validWorker } = require('../middleware/worker');
const router = new express.Router();


router.post('/workers', auth,isAdmin ,validWorker,saveWorker, async (req, res) => {
    res.status(201).send({ status:"success" });
})
router.get('/workers', auth,getAllWorkers, async (req, res) => {
    res.status(200).send(res.body);
})
router.patch('/workers/:id', auth,isAdmin,updateWorker, async (req, res) => {
    res.status(200).send({ status:"success" })
})
router.delete('/workers/:id', auth,isAdmin,deletWorker, async (req, res, next) => {
    res.status(200).send({ status:"success" })
})


module.exports = router;