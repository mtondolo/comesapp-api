const express = require('express');
const mongoose = require('mongoose');
const Event = require('../model/Event');
const router = express.Router();

router.route('/')

  .get((req, res) => {

    Event.find({}, (err, events) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(events);
    }).

    // Get all items desc by created date
    sort( [['_id', -1]] ).

    // Get last 10 createad items  
    limit(10)
    
  });
  
module.exports = router;