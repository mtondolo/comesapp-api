const express = require('express');
const mongoose = require('mongoose');
const objectIdToTimestamp = require('objectid-to-timestamp');
const NewsItem = require('../model/NewsItem');
const router = express.Router();

router.route('/')

  .get((req, res) => {

    NewsItem.find({}, (err, newsitems) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(newsitems);
    }).objectIdToTimestamp('_id').

    // Get all items desc by created date
    sort( [['_id', -1]] ).

    // Get last 10 createad items  
    limit(10) 

  });
module.exports = router;