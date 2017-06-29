const data = require('./data');
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function (req, res) {
  res.render('list', data);
});


app.listen(3000);
