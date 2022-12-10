

// Dependencies
const http = require('http');

const { handleReqRes } = require('./helpers/handleReqRes');
// app object

const app = {}

app.config = { port: 8000 };



app.createServer = () => {
    const server = http.createServer(app.handleReqRes);

    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    })
}

app.handleReqRes = handleReqRes;


// start the server
app.createServer();


