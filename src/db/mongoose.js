const mongoose = require('mongoose');
const config = require('config');

const mongoDB =process.env.MONGODB_URL || config.get("mongoDB");

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})