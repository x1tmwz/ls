const config = require('config');
const app = require('./src/app');
const path = require('path')
const port = process.env.PORT || config.get("port");

const publicPath = path.join(__dirname, './client','build');

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, function(){
    console.log("server start on port " + port);
});
