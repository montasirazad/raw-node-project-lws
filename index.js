

// Dependencies
const http = require('http');
const url = require('url');
// app object

const app = {}

app.config = { port: 8000 };



app.createServer = () => {
    const server = http.createServer(app.handleReqRes);

    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    })
}

app.handleReqRes = (req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryObject = parsedUrl.query;
    const headersObject = req.headers;
    console.log(headersObject);

    res.end('hello world')
}


// start the server
app.createServer();

//console.log(url.parse);
