const PORT = 5500;

var server = require('http').createServer();
var socket = require('socket.io');

var io = socket(server);


var players = [];

var player1 = false;
var player2 = false;

server.listen(PORT, function(){
    console.log('Listening on ' + server.address().port);
});

io.on('connection', function(client) {
  console.log('new connection: ' +  client.id);
    
    client.on('askNewPlayer', function(){

      players.push(client.id)
      client.broadcast.emit('newPlayer')
      console.log('There are ' + players.length + ' players...')
    

      if(players.length === 1){
        client.emit('isPlayer1')
        console.log(players.length)
        player1 = true;
        
      }

      if(players.length === 2){
        io.emit('2Players')
        console.log('2 Players joined')
      }
      
    })

    client.on('disconnect', function() {
      io.emit('remove', client.id);
      console.log('disconnecting: ' + client.id);
    })

    //score 

    client.on('serverCorrect', function(){
      client.broadcast.emit('correct');
      console.log('Correct!')
    });


    client.on('severWrong', function(){
      client.broadcast.emit('wrong');
      console.log('Wrong..')
    });


})

