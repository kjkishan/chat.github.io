var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];
server.listen(process.env.PORT || 3000);
console.log('server running....kishan');
 app.get('/',function(req, res){
 	res.sendFile( __dirname + '/index.html');
 });


 io.sockets.on('connection',function(socket){
 	connections.push(socket);
 	console.log('connected: %s socket connected', connections.length);


 	//disconnect

socket.on('Disconnect', function(data){
	connections.splice(connections.indexOf(socket),1);
 	console.log('disconnected: %s socket connections', connections.length);

});

//send message

socket.on('send message',function(data){
	console.log(data);
	io.sockets.emit('new message',{msg: data});
});




 	
 });