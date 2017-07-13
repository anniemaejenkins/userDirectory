const data = require('./data');
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/index', (req, res) => {
  res.render('list', data);
  // console.log(data);
});

app.get('/index/:id', (req, res) => {
    var users;
  for (var i = 0; i < data.users.length; i++) {
    if(data.users[i].id == req.params.id){
      users = data.users[i];
    }
  } console.log(users);
  res.render('robot', users);
  console.log("hello");
});

app.listen(process.env.PORT || 3000);
