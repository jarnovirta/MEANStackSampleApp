
var express = require('express');
var bodyParser = require('body-parser');
var websockets = require('./websockets');
var logger = require('morgan');

var app = express();


app.use(require('./auth'));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(require('./controllers'));

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
	console.log('Server listening on', port)
});
var shell = require('gulp-shell');
shell.task(['echo \'youyou\'']);
websockets.connect(server);