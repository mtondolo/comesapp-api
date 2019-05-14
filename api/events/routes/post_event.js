const express = require('express');
const mongoose = require('mongoose');
const Event = require('../model/Event');
const router = express.Router();

router.route('/')
  .post((req, res) => {

    const event = new Event(req.body);

    event.save((err, event) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(event);
      // res.json({ message: 'Event saved! '});
    });
    
  });

module.exports = router;