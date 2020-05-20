const PORT = 4000;

var server = require('http').createServer();
var socket = require('socket.io');

var io = socket(server);

io.on('connection', function(client) {
    
    client.on('test', function() {
        console.log('test received');
    });

    client.on('newplayer',function() {
        console.log('Player' + server.lastPlayerID + ' joined the game');
        console.log(players)

        client.player = {
            id: server.lastPlayerID++,
            // x: randomInt(100,400),
            // y: randomInt(100,400),
            name: 'Player' + server.lastPlayerID
        };


        client.emit('allplayers',getAllPlayers());
        client.broadcast.emit('newplayer', players);

        // client.on('disconnect',function() {
        //     io.emit('remove', client.player.id);
        //     console.log('disconnecting: ' + client.player.id);
        // });
    });
    
    // client.on('numberOfPlayers', function() {
    //     client.emit('allplayers',checkNumberOfPlayers());
    //     client.broadcast.emit('players');
    // })
    
});

server.lastPlayerID = 0;



server.listen(PORT, function(){
    console.log('Listening on ' + server.address().port);
});

var players = [];

function getAllPlayers(){
    Object.keys(io.sockets.connected).forEach(function(socketID){
        var player = io.sockets.connected[socketID].player;
        if(player) {
            players.push(player);
        }

    });
    // return players;
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function checkNumberOfPlayers() {
    
}

// function checkNumberOfPlayers() {
//     if (server.lastPlayerID <= 1){
//         console.log('waiting for players')
        
//     } else if (server.lastPlayerID > 2 ) {
//         console.log('too many players')
//     }
//     else 
//     {
//         console.log('beginning game')
//     }
