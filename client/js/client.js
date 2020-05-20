var Client = {};
Client.socket = io('http://localhost:5500/');

//Client sends back to server
Client.sendTest = function(){
    console.log("test sent");
    Client.socket.emit('test')
};

Client.askNewPlayer = function(){
    console.log('New Player')
    Client.socket.emit('askNewPlayer');

};

Client.numPlayers = function(){
    Client.socket.emit('numPlayers');
};

 Client.socket.on('2Players', function(){
    console.log('2 Players')
    Client.connected = function(){
        game.connected = game.add.image(phaser.config.width / 2, phaser.config.height / 2+230, 'connected');
        game.player2 = game.add.image(phaser.config.width / 2+270, phaser.config.height / 2+205, 'player2');
        setTimeout(function() {	
            game.scene.start('game');
        }, 3500)
    }
})
