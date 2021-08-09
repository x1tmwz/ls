const Worker = require('../models/worker');
const ApiError = require("../error/ApiError");
const Validate = require("../utils/Validate")



const saveWorker = async (req, res, next) => {
    const worker = new Worker({ ...req.body })
    await worker.save();
    next();
}
const getAllWorkers = async (req, res, next) => {
        const Workers = await Worker.find({}).sort({ createdAt: -1 }).limit(parseInt(req.query.limit));
        res.body = Workers;
        next();
}
const validWorker = (req, res, next) => {
    const validate = new Validate();
    const workersKeys = ["firstName","lastName","department"];
    if(!validate.validObject(req.body,workersKeys)){
        next(ApiError.badRequest("something went wrong with data"));
        return;
    }
    next();
}
const updateWorker = async (req, res, next) => {
    const worker = await Worker.findOneAndUpdate({ _id: req.params.id },req.body);
    if (!worker) next(ApiError.badRequest("there is no worker with this id"));
    next();
}
const deletWorker = async (req, res, next) => {
    const worker = await Worker.findOneAndDelete({ _id: req.params.id });
    if (!!worker) {
        req.body = worker;
        next();
    } else {
        res.sendStatus(404);
    }
}


module.exports = {
    saveWorker,
    getAllWorkers,
    updateWorker,
    deletWorker,
    validWorker,
}