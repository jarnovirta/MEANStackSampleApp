var ws = require('ws');
var _ = require('lodash');
var clients = [];

exports.connect = function (server) {
	var wss = new ws.Server({ server: server});
	wss.on('connection', function(socket) {
		clients.push(socket);
		exports.broadcast('new client joined');
		console.log('Add websocket client');
		socket.on('close', function () {
			_.remove(clients, socket);
			console.log('Remove websocket client');
		})
	})

}
exports.broadcast = function (topic, data) {
	var json = JSON.stringify({ topic: topic, data: data });
	clients.forEach(function (client) {
		client.send(json);
	})
}