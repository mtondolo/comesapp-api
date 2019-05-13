    
const express = require('express');
const mongoose = require('mongoose');
const NewsItem = require('../model/NewsItem');
const router = express.Router();

router.route('/')
  .post((req, res) => {

    const newsitem = new NewsItem(req.body);

    newsitem.save((err, newsitem) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(newsitem);
      // res.json({ message: 'News Item saved! '});
    });
    
  });

module.exports = router;
