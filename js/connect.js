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

    }

    create(){

        this.bg = this.add.image(400, 300, 'bg');
        this.menuLogo = this.add.image(phaser.config.width / 2, phaser.config.height / 2-100, 'menu-logo');
        this.connecting = this.add.image(phaser.config.width / 2, phaser.config.height / 2+200, 'connecting');
        this.connectingBackBtn = this.add.image(phaser.config.width / 2-300, phaser.config.height / 2-260, 'connecting-back-btn').setInteractive();
        this.heart = this.add.image(phaser.config.width / 2-200, phaser.config.height / 2+210, 'heart');

        this.connectingBackBtn.on('pointerdown', function(){
            this.scene.start('menu');
            console.log("clicked");
        }, this )


    }

    update(){
        
    }
    
}