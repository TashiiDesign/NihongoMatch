const PORT = 5500;

var server = require('http').createServer();
var socket = require('socket.io');

var io = socket(server);


var players = [];
var numPlayers = 0;

server.listen(PORT, function(){
    console.log('Listening on ' + server.address().port);
});

io.on('connection', function(client) {
    
    client.on('test', function() {
        console.log('test received');
    });


    client.on('askNewPlayer', function(){
        
        players.push(client.id)
        numPlayers++
        client.broadcast.emit('newPlayer')
        console.log(numPlayers)

        client.on('disconnect',function() {
          client.broadcast.emit('remove', client.id);
          console.log('disconnecting: ' + client.id);
          numPlayers--
      });
 
    });

    client.on('numPlayers', function(){
      console.log(numPlayers)

      if(numPlayers == 2){
        io.emit('2Players')
        console.log('2 players')

      }
    })

    client.on('countdown', function(){
      client.broadcast.emit('startgame')
    })



})

