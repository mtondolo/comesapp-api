// Import http from node.js
const http = require('http');

// Include hostname and port
const hostname = 'localhost';
const port = 3001;

// Kick off and start server
const server = http.createServer((request, response) => {

    // Status code for server response
    response.statusCode = 200;

    // Set plain text type response to serve to user 
    response.setHeader('Content-Type', 'text/plain');

    // Serve actual data to user
    response.end('Hello World\n');
});

// Listen to incoming request through port and host
server.listen(port, hostname, () => {

    // Log message to console after firing up the server
    console.log(`Server running at http://${hostname}:${port}/`);
});