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

    
