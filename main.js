var fs = require('fs');
var events = require('events');

// 阻塞式文件读取
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());

// 非阻塞式文件读取
// fs.readFile('input.txt', function(err, data) {
// 	if (err) return console.error(err);
// 	console.log(data.toString());
// });

// 事件驱动
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
	console.log('连接成功。');
	eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function() {
	console.log('数据接收成功。');
});
eventEmitter.emit('connection');

console.log('程序执行结束！');