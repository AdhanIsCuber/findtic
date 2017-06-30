var express = require('express');
var index = require('./routes/index');

var app = express();

// view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));

app.use('/', index);

// server
var server = app.listen(4000, function() {
    console.log('Findtic server start on http://127.0.0.1:4000');
})

module.exports = app;