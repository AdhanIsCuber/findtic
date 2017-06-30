var express = require('express');
var index = express.Router();

index.get('/', function(req, res) {
    res.render('user/index.html');
});

module.exports = index;