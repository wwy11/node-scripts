var express = require('express');
var app = express();

app.use(express.static('.'));

app.get('/', function(req, res) {
	res.send('Hello World');
})

var server = app.listen(8888, function() {
	console.log('服务器地址为 http://127.0.0.1:8888');
})