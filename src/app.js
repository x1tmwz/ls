const express = require('express');
require('./db/mongoose');
const userRouter = require("./routers/user");
const workerRouter = require("./routers/worker");
const route404 = require('./middleware/route404');
const apiErrorHandler = require('./middleware/apiErrorHandler');
const path = require('path')



const app = express();


const publicPath = path.join(__dirname, '../client','build');


app.use(express.static(publicPath));

app.use(express.json());
app.use(userRouter);
app.use(workerRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.use(route404);
app.use(apiErrorHandler);


module.exports = app;