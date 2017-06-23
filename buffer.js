// buf = new Buffer(256);
// len = buf.write('你好，世界！');
// console.log('写入字节数：' + len);

buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
	buf[i] = i + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString(undefined, 0, 5));