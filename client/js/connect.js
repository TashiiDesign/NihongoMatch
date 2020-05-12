class Connect extends Phaser.Scene {
    constructor() {
      super("connect");
        
    }

  
    preload(){

        game = this; 
        
        var menuLogo = this.load.image('menu-logo', '../assets/start-screen/menu-logo.png');
        var bg = this.load.image('bg', '../assets/start-screen/start-screen-bg.png');
        var connecting = this.load.image('connecting', '../assets/connecting-screen/connecting.png');
        var connectingBackBtn = this.load.image('connecting-back-btn', '../assets/connecting-screen/connecting-back-btn.png')
        var heart = this.load.image('heart', '../assets/connecting-screen/heart.png');
        var connected = this.load.image('connected', '../assets/connecting-screen/connected.png');
        var player1 = this.load.image('player1', '../assets/connecting-screen/player1.png');
        var player2 = this.load.image('player2', '../assets/connecting-screen/player2.png');
        var players = this.load.image('players', '../assets/connecting-screen/players.png');

    }

    create(){

        this.bg = this.add.image(400, 300, 'bg');
        this.menuLogo = this.add.image(phaser.config.width / 2, phaser.config.height / 2-100, 'menu-logo');
        this.connecting = this.add.image(phaser.config.width / 2, phaser.config.height / 2+200, 'connecting');
        this.connectingBackBtn = this.add.image(phaser.config.width / 2-300, phaser.config.height / 2-260, 'connecting-back-btn').setInteractive();
        this.heart = this.add.image(phaser.config.width / 2-179, phaser.config.height / 2+230, 'heart');
        //this.connected = this.add.image(phaser.config.width / 2, phaser.config.height / 2+230, 'connected');
        this.player1 = this.add.image(phaser.config.width / 2-270, phaser.config.height / 2+200, 'player1');
        //this.player2 = this.add.image(phaser.config.width / 2+270, phaser.config.height / 2+205, 'player2');
        //this.players = this.add.image(phaser.config.width / 2+20, phaser.config.height / 2+265, 'players');

        this.connectingBackBtn.on('pointerdown', function(){
            this.scene.start('menu');
            console.log("clicked");
        }, this )


    }

    update(){
        
    }
    
}