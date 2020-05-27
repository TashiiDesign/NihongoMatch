class Connect extends Phaser.Scene {
    constructor() {
      super("connect");
        
    }

    preload(){

        //Preload Audio
        var connectedAudio = this.load.audio('connected-tone', '/client/assets/sounds/connected-tone.mp3')

        //Preload Assets
        var menuLogo = this.load.image('menu-logo', '/client/assets/start-screen/menu-logo.png');
        var bg = this.load.image('bg', '/client/assets/start-screen/start-screen-bg.png');
        var connecting = this.load.image('connecting', '/client/assets/connecting-screen/connecting.png');
        var connectingBackBtn = this.load.image('connecting-back-btn', '/client/assets/connecting-screen/connecting-back-btn.png')
        var heart = this.load.image('heart', '/client/assets/connecting-screen/heart.png');
        var connected = this.load.image('connected', '/client/assets/connecting-screen/connected.png');
        var player1 = this.load.image('player1', '/client/assets/connecting-screen/player1.png');
        var player2 = this.load.image('player2', '/client/assets/connecting-screen/player2.png');
        var players = this.load.image('players', '/client/assets/connecting-screen/players.png');
    }

    create(){

        //Adding Audio 
        var connectedTone = this.sound.add('connected-tone');
        game.connectedTone = connectedTone

        game = this;

        this.bg = this.add.image(400, 300, 'bg');
        this.menuLogo = this.add.image(phaser.config.width / 2, phaser.config.height / 2-100, 'menu-logo');
        this.connecting = this.add.image(phaser.config.width / 2, phaser.config.height / 2+200, 'connecting');
        this.connectingBackBtn = this.add.image(phaser.config.width / 2-300, phaser.config.height / 2-260, 'connecting-back-btn').setInteractive();
        this.heart = this.add.image(phaser.config.width / 2-179, phaser.config.height / 2+230, 'heart');
        this.player1 = this.add.image(phaser.config.width / 2-270, phaser.config.height / 2+200, 'player1');
       

        Client.askNewPlayer(); //Runs function 'askNewPlayer' from Client 

        Client.isPlayer1(); //Runs function 'isPlayer1' from Client

        //If message '2Players' is received, images are added to the screen to show connectivity
        Client.socket.on('2Players', function(){
            console.log('2 Players')
            game.connected = game.add.image(phaser.config.width / 2, phaser.config.height / 2+230, 'connected');
            game.player2 = game.add.image(phaser.config.width / 2+270, phaser.config.height / 2+205, 'player2');
            connectedTone.play(); //Audio is played

            setTimeout(function(){    //After a short time, the game scene is started
                game.scene.start('game')
            },3000)

        })

        //Switches the scene back to 'menu' 
        this.connectingBackBtn.on('pointerdown', function(){
            this.scene.switch('menu');
        }, this )

    }

    update(){
        
    }
    
}