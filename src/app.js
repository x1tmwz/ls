const express = require('express');
require('./db/mongoose');
const userRouter = require("./routers/user");
const workerRouter = require("./routers/worker");
const route404 = require('./middleware/route404');
const apiErrorHandler = require('./middleware/apiErrorHandler');



const app = express();

app.use(express.json());
app.use(userRouter);
app.use(workerRouter);

app.use(route404);
app.use(apiErrorHandler);


module.exports = app;