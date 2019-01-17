const express = require('express');
const mongoose = require('mongoose');
const Product = require('../model/Product');
const router = express.Router();

router.route('/')
  .get((req, res) => {

    Product.find({}, (err, agriculture_products) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(agriculture_products);
    });
    
  });

module.exports = router;