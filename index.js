const express = require('express');
const path = require('path');
const pug = require('pug');
const PORT = process.env.PORT || 5000;

var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));//router.set('port', PORT);

//app.set('view engine', 'ejs');
app.set('view engine', 'pug');


//app.get('/', function(req, res) {  res.render('pages/index.ejs', {     title: 'Home KJ2019'  });  });
app.get('/', function(req, res) {  res.render('index.pug', {     title: 'Home KJ2019'  });  });
//app.get('/index1', function(req, res) {  res.render('index1.pug', {     title: 'iHome KJ2019'  });  });


app.get('/wedding', (req, res) => res.render('wedding.pug', {title: 'Wedding'}));
app.get('/travel', (req, res) => res.render('travel', {title: 'Accommodation'}))
app.get('/registry', (req, res) => res.render('registry', {title: 'Registry'}))
app.get('/venue', (req, res) => res.render('venue', {title: 'Venue'}))
app.get('/todo', (req, res) => res.render('todo', {title: 'NYC Recreation'}))
app.get('/food', (req, res) => res.render('food', {title: 'Foo:D!!!'}))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
