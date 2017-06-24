var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', function(req, res) {
	fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
		console.log(data);
		res.end(data);
	});
})

var server = app.listen(8888, function() {
	console.log('访问地址为 localhost:8888');
})