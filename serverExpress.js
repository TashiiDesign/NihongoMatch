//express used to host client folder 
var express = require('express');

var app = express();
var server = app.listen(5500);

app.use(express.static('client'));

console.log("Server is running");

var socket = require('socket.io');

var io = socket(server);
// const connections = [null, null];

//socket is a connection. New connection event

var players = [];
var numPlayers = 0;

io.on('connection', function (socket) {
    console.log('new connection: ' +  socket.id);

    socket.on('test', function() {
        console.log('test received');
    });


    socket.on('askNewPlayer', function(){
        
        players.push(socket.id)
        numPlayers++
        socket.broadcast.emit('newPlayer')
        console.log(numPlayers)

        socket.on('disconnect',function() {
          io.emit('remove', socket.id);
          console.log('disconnecting: ' + socket.id);
          numPlayers--
      });
 
    });

    socket.on('numPlayers', function(){
      console.log(numPlayers)

      if(numPlayers == 2){
        io.emit('2Players')
        console.log('2 players')

      }
    })

    
})