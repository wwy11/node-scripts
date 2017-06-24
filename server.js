var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log(pathname);
	console.log('Request for ' + pathname + ' received.');
	fs.readFile(pathname.substr(1), function(err, data) {
		if (err) {
			console.log(err);
			response.writeHead(404, {'Content-Type': 'text/html'});
		} else {
			response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
			response.write(data.toString());
		}
		response.end();
	});
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');

// function start(route) {
// 	function onRequest(request, response) {
// 		var pathname = url.parse(request.url).pathname;
// 		console.log('Request for ' + pathname + ' received.');
// 		route(pathname);
// 		response.writeHead(200, {'Content-Type': 'text/plain'});
// 		response.write('Hello World');
// 		response.end();
// 	}

// 	http.createServer(onRequest).listen(8888);
// 	console.log('Server has started.');
// }

// exports.start = start;