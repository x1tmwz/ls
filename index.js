const config = require('config');
const app = require('./src/app');
const port = process.env.PORT || config.get("port");



app.listen(port, function(){
    console.log("server start on port " + port);
});
