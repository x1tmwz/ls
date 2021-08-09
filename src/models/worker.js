const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    department: {
        type: String,
        trim: true,
        required: true
    },
}, {
    timestamps: true
}
)


const Worker = mongoose.model('Worker', workerSchema)
module.exports = Worker;