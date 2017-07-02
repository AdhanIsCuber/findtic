var express = require('express');
var index = express.Router();

index.get('/', function(req, res) {
    res.render('user/index.html');
});
index.get('/404', function(req, res) {
    res.render('user/404.html');
});

module.exports = index;