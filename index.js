'use strict'

var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:database1@ds231961.mlab.com:31961/zoo-test');

app.listen(port);

console.log('Edutec Backend is running')