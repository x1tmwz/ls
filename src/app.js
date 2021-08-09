const express = require('express');
require('./db/mongoose');
const userRouter = require("./routers/user");
const workerRouter = require("./routers/worker");
const path = require('path')
const route404 = require('./middleware/route404');
const apiErrorHandler = require('./middleware/apiErrorHandler');

const publicPath = path.join(__dirname, './client','build');
const app = express();

app.use(express.json());
app.use(userRouter);
app.use(workerRouter);

app.use(route404);
app.use(apiErrorHandler);
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

module.exports = app;