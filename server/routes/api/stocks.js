// SQLise for MySQL database
// if we switch to mongo, mongoose
const express = require('express');
const models = require('../../../server/models/stockSchema');
const request = require('request');

const router = express.Router();
require('dotenv').config();
// alphavantage for quotes https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo
// gets stock prices, returns JSON

// get stock information
router.route('/:ticker').get((req, res) => {
  var url = "https://cloud.iexapis.com/beta/stock/"
      + req.params.ticker + "/quote?token=" + process.env.IEX_PUBLIC_TOKEN;
  request.get(url, (error, response, body) => {
    res.send(body);
  });
});

// get stock quotes
router.route('/quote/:query').get((req, res) => {
  var url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="
      + req.params.ticker + "&interval=5min&apikey=" + process.env.ALPHA_VANTAGE_KEY;
  request.get(url, (error, response, body) => {
    res.send(body);
  });
});

// todo: get chart information
router.route('/chart/:query').get((req, res) => {
  var url = "https://cloud.iexapis.com/beta/stock/"
      + req.params.query + "/chart/max?token=" + process.env.IEX_PUBLIC_TOKEN;
  request.get(url, (error, response, body) => {
    res.send(body);
  });
});


module.exports = router;
