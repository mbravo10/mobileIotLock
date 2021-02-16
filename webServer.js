var http = require('http').createServer(handler);
var fs = require('fs');
var io = require('socket.io')(http);

http.listen(8080);

function handler(req, res) {
 fs.readFile(__dirname + '/public/index.html', function(err, data) {
	if(err){
	  res.writeHead(404, {'Content-Type': 'text/html'});
	  return res.end("404 Not Found");
	}
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write(data);
	return res.end();
	});
}

io.sockets.on('connection', (socket) => {
	var lightvalue = 0;
	socket.on('light', (data) => {
		lightvalue = data;
		if(lightvalue){
			console.log(lightvalue);
		}
	});
});
