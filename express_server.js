var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).array('image'));

app.get('/process_get', function(req, res) {
	var response = {
		"first_name": req.query.first_name,
		"last_name": req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function(req, res) {
	// res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'})
	res.set({'Content-Type': 'text/plain; charset=utf8'});
	var response = {
		"用户名": req.body.name,
		"密码": req.body.pass
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.post('/file_upload', function(req, res) {
	console.log(req.files[0]);
	var dest_file = __dirname + '/' + req.files[0].originalname;
	fs.readFile(req.files[0].path, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			response = {
				message: 'File uploaded successfully',
				filename: req.files[0].originalname
			};
			console.log(response);
			res.end(JSON.stringify(response));
		}
	});
})

var server = app.listen(8888, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("访问地址为http://%s:%s", host, port);
})