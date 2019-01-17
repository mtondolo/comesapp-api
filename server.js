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

app.use(bodyParser.json());

// Listen to url request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Receive requets from other domains
app.use(cors());

// Import data json file
let agriculture_products = require('./data');

// Listen to http get request and handle it
app.get('/api/agriculture_products', (request, response) => {

    // Response with message if no dota is found
    if (!agriculture_products) {
        response.status(404).json({ message: 'No agriculture_products found.' });
      }

   // Response data as agriculture_products and header as json  
   response.json(agriculture_products);
});

// Listen to http get request and handle it for one resource
app.get('/api/agriculture_products/:description', (request, response) => {
    
    // Get hold of request name
    let productDescription = request.params.description;
    
    // Filter throug the agriculture_products list
    let product = agriculture_products.filter(product => {

        //Return the matching butchery
        return product.description == productDescription;
      });

      if (!product) {
        response.status(404).json({ message: 'Contact not found' });
      }

      // Response with the details of the matching butchery
      response.json(product[0]);

});

// Listen to http post request and handle the request
app.post('/api/agriculture_products', (request, response) => {

   // Create the product to add
    let product = {
      id: agriculture_products.length + 1,
      company: request.body.company,
      description: request.body.description,
      country: request.body.country,
    };

    // Add the new product to the list
    agriculture_products.push(product);

    // Respond with the product object
    response.json(product);
  
  });

// Include hostname and port
const hostname = 'localhost';
const port = 3001;

// Listen to incoming request through port and host
app.listen(port, hostname, () => {

    // Log message to console after firing up the server
    console.log(`Server running at http://${hostname}:${port}/`);
});