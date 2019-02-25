const express = require('express');
const mongoose = require('mongoose');
const NewsItem = require('../model/NewsItem');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    NewsItem.find({}, {sort: '-date'}, (err, newsitems) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(newsitems);
    });
       
  });
module.exports = router;