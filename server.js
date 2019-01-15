// Allows us to latest ES features
'use strict';

// Import express module from node.js
const express = require('express');

// Initialize express
const app = express();

// Convert payload into a usable request body 
const bodyParser = require('body-parser');

// Allow api to take request from other domains
const cors = require('cors');

// Listen to url request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Receive requets from other domains
app.use(cors());

// Import data json file
let contacts = require('./data');

// Listen to http get request and handle it
app.get('/api/contacts', (request, response) => {

    // Response with message if no dota is found
    if (!contacts) {
        response.status(404).json({ message: 'No contacts found.' });
      }

   // Response data as contacts and header as json  
   response.json(contacts);
});

// Include hostname and port
const hostname = 'localhost';
const port = 3001;

// Listen to incoming request through port and host
app.listen(port, hostname, () => {

    // Log message to console after firing up the server
    console.log(`Server running at http://${hostname}:${port}/`);
});