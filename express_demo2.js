var express = require('express');
var querystring = require('querystring');
var app = express();

app.get('/', function(req, res) {
	console.log('主页GET请求');
	res.send('Hello GET');
})

app.post('/', function(req, res) {
	console.log('主页POST请求');
	res.send('Hello POST');
})

app.get('/user', function(req, res) {
	// console.log(req.query);
	var query = req.query;
	if (query.name) {
		res.send('Hello ' + query.name + '!');
	} else {
		res.send('Hello Stranger!');
	}
})

app.get('/ab*cd', function(req, res) {
	console.log('/ab*cd GET 请求');
	res.send('正则匹配');
})

var server = app.listen(8888, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('应用实例，访问地址为 http://%s:%s', host, port);
})