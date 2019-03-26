const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// express-angular engine todo
// const ngExpressEngine = require('@nguniversal/express-engine');
//const models = require('./server/models/stockSchema');
const app = express();
// var IEX_SECRET = process.env.IEX_SECRET_TOKEN;

require('dotenv').config();
const PORT = process.env.PORT;
// init middleware
// Body parser
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// todo: engine
// app.engine('html', ngExpressEngine({
//   bootstrap: ServerModule
// }));
// app.search('view engine', 'html');

// Homepage route
app.use(express.static(path.join(__dirname, './src')));

// Stock quotes route/TOPS data
app.use('/api/stocks', require('./server/routes/api/stocks'));

// Stock Info Route
//app.use('/api/sd', require('./server/routes/api/stockinfo'));

// News route
app.use('/api/news', require('./server/routes/api/news'));

// Markets route
//app.use('/api/markets', require('./server/routes/api/markets'));


// If invalid, send to Index.html -
// todo: 404 page
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './src/index.html'));
})

var server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
