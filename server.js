const PORT = 55000; //Port variable

var server = require('http').createServer(); //Adds HTTP and creates the server 
var socket = require('socket.io'); //Adds Socket IO

var io = socket(server); 

//Players array for new player connections to be added 
var players = [];

var player1 = false;

//Listening to port 
server.listen(PORT, function(){
    console.log('Listening on ' + server.address().port);
});

io.on('connection', function(client) {
  console.log('new connection: ' +  client.id);
    
    //Adds a new player to the array using their ID
    client.on('askNewPlayer', function(){

      players.push(client.id) 
      client.broadcast.emit('newPlayer') // Broadcasts to all other players
      console.log('There are ' + players.length + ' players...')
    
      //If the length of the array is equal to 1...
      //Emits to the client the message 'isPlayer1'
      //Changes boolean to true 

      if(players.length === 1){
        client.emit('isPlayer1')
        console.log(players.length)
        player1 = true;
        
      }

      //If the length of the array is equal to 2...
      //Emits to the players '2Players'

      if(players.length === 2){
        io.emit('2Players')
        console.log('2 Players joined')
      }
      
    })

    //If a client disconnects, remove their id...
    client.on('disconnect', function() {
      io.emit('remove', client.id);
      console.log('disconnecting: ' + client.id);

      // if(players.length > 2){
      //   io.emit('remove', client.id);
      //   players.slice(0, 2 )
      //   console.log(players.length)
      // }
    })
    

    //If the server receives a 'serverCorrect' message...
    //Broadcast to all players 'correct'

    client.on('serverCorrect', function(){
      client.broadcast.emit('correct');
      console.log('Correct!')
    });

    //If the server receives a 'serverWrong' message...
    //Broadcast to all players 'wrong'

    client.on('severWrong', function(){
      client.broadcast.emit('wrong');
      console.log('Wrong..')
    });




})

