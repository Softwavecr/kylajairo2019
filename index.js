const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));//router.set('port', PORT);

app.set('view engine', 'ejs');
app.set('view engine', 'pug');


app.get('/', function(req, res) {  res.render('pages/index.ejs', {     title: 'Home KJ2019'  });  });
// app.get('/index1', function(req, res) {  res.render('index1', {     title: 'iHome KJ2019'  });  });


app.get('/wedding', (req, res) => res.render('wedding.pug', {title: 'wHome KJ2019'}));
// app.get('/travel', (req, res) => res.render('travel', {title: 'tHome KJ2019'}))
// app.get('/registry', (req, res) => res.render('registry', {title: 'rHome KJ2019'}))
// app.get('/venue', (req, res) => res.render('venue', {title: 'vHome KJ2019'}))
// app.get('/todo', (req, res) => res.render('todo', {title: 'toHome KJ2019'}))
// app.get('/food', (req, res) => res.render('food', {title: 'fHome KJ2019'}))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
