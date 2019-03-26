const express = require('express');
const router = express.Router();
const request = require('request');

require('dotenv').config();

// Will be using News API https://newsapi.org/v2/everything?q=bitcoin&apiKey=10fdb080d72d424b87f64b717efe7429
// Gets all top headlines on a stock
router.route('/:ticker').get((req, res) => {
  var url = "https://newsapi.org/v2/everything?q=" + req.params.ticker + "&apiKey=" + process.env.NEWS_KEY;
  request.get(url, (error, response, body) => {
    res.send(body);
  })
})

module.exports = router;
