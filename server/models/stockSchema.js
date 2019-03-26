 const mongoose = require('mongoose');

 var StockSchema = new mongoose.Schema ({
  symbol: String,
  companyName: String,
  close: Number,
  latestPrice: Number,
  latestTime: String,
  previousClose: Number,
  change: Number,
  changePercent: Number,
  avgTotalVolume: Number,
  marketCap: Number,
  peRatio: Number,
  week52High: Number,
  week52Low: Number,
  ytdChange: Number
}, {
  collection: 'Stocks'
});
// set mongoose model to stock
var Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;
