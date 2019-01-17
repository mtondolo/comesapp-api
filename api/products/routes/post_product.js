const express = require('express');
const mongoose = require('mongoose');
const Product = require('../model/Product');
const router = express.Router();

router.route('/')
  .post((req, res) => {

    const product = new Product(req.body);

    product.save((err, product) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(product);
      // res.json({ message: 'Contact saved! '});
    });
    
  });

module.exports = router;