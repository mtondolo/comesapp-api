'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const MONGOLAB_URI = 'mongodb://mtondolo:l0k0!010@ds159624.mlab.com:59624/mt110179';
//const mongooseUri = uriUtil.formatMongoose(mongodbUri);
//const dbOptions = {};

app.use('/api/products', require('./api/products/routes/post_product'));
app.use('/api/products', require('./api/products/routes/get_products'));

//const hostname = 'localhost';
//const port = 3001;
var port = process.env.PORT || 8080;

const server = app.listen(port, () => {

  mongoose.connect(process.env.MONGOLAB_URI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});
  
});
