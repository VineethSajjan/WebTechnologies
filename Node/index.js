const http = require('http');
const fs = require('fs');
const { Console } = require('console');

const hostname = '127.0.0.1';
const port = 3000;
const home =fs.readFileSync('./index.html');

const contact =fs.readFileSync('./contact.html');

const about =fs.readFileSync('./About.html');

const service =fs.readFileSync('./service.html');
const server = http.createServer((req, res) => {
    Console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});