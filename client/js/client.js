var Client = {};
Client.socket = io('http://localhost:5500/');

player1 = false;

Client.askNewPlayer = function(){

    console.log('There is a New Player')
    Client.socket.emit('askNewPlayer')
}

Client.isPlayer1 = function(){
    Client.socket.on('isPlayer1', function(){
        console.log('You are Player 1')
        player1 = true;
        
    })
}


    
