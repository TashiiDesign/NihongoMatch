//express used to host client folder 
var express = require('express');

var app = express();
var server = app.listen(4000);

app.use(express.static('client'));

console.log("Server is running");

var socket = require('socket.io');

var io = socket(server);
// const connections = [null, null];

//socket is a connection. New connection event

io.on('connection', function (socket) {
    console.log('new connection: ' +  socket.id);

    socket.on('newplayer',function() {
        socket.player = {
            id: server.lastPlayerID++,
            x: randomInt(100,400),
            y: randomInt(100,400)
        };
        socket.emit('allplayers',getAllPlayers());
        socket.broadcast.emit('newplayer',socket.player);
	
    })
})

app.lastPlayerID = 0;

function getAllPlayers(){
    var players = [];
    Object.keys(io.sockets.connected).forEach(function(socketID){
        var player = io.sockets.connected[socketID].player;
        if(player) players.push(player);
    });
    return players;
}


function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}