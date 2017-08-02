var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var cors = require('cors')
var index = require('./routes/index');
var users = require('./routes/users');
var uri = 'mongodb://mallaneka:mallaneka@ds129013.mlab.com:29013/mallaneka'
mongoose.connect(uri)
var app = express();

// view engine setup

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);
app.use('/users', users);


module.exports = app;
