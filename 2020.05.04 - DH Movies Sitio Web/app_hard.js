const http = require('http');
const router = require('./router');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	// Route System
	var path = req.url;
	router.handleRequest(path,res);


	// ¿?
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));