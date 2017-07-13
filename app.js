const data = require('./data');
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', (req, res) => {
  res.render('list', data);
  // console.log(data);
});

app.get('/:id', (req, res) => {
  res.render('robot', data);
  // console.log("hello");
});

app.listen(3000);
