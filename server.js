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

// Import mongo modules
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');

app.use(bodyParser.json());

// Listen to url request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Receive requets from other domains
app.use(cors());

// Connect to the database
const mongodbUri = 'mongodb://mtondolo:l0k0!010@ds159624.mlab.com:59624/mt110179';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

app.use('/api/products', require('./api/products/routes/get_products'));

// Include hostname and port
const hostname = 'localhost';
const port = 3001;

const server = app.listen(port, hostname, () => {

  mongoose.connect(mongooseUri, dbOptions, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Server running at http://${hostname}:${port}/`);

  });

});
