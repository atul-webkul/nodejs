var http = require('http');
const colors = require('colors');
const data = require('./data');


http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application\json' });
    resp.write(JSON.stringify(data))
    resp.end();

}).listen(8080);
