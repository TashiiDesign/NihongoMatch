var Client = {}; //Client object 
Client.socket = io('http://localhost:55000/'); //Socket URL

player1 = false; //Default boolean for player1

//Client function which emits 'askNewPlayer'
Client.askNewPlayer = function(){

    console.log('There is a New Player')
    Client.socket.emit('askNewPlayer')
}

//Client function which emits 'isPlayer1' and changes player1 boolean to true
Client.isPlayer1 = function(){
    Client.socket.on('isPlayer1', function(){
        console.log('You are Player 1')
        player1 = true;
        
    })
}


    
