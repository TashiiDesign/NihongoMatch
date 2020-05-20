class Category extends Phaser.Scene {
    constructor() {
      super("category");
        
    }

  
    preload(){

        game = this; 
        
        var menuLogo = this.load.image('menu-logo', '/client/assets/start-screen/menu-logo.png');
        var bg = this.load.image('bg', '/client/assets/start-screen/start-screen-bg.png');
        var connectingBackBtn = this.load.image('connecting-back-btn', '/client/assets/connecting-screen/connecting-back-btn.png')

    }

    create(){

        this.bg = this.add.image(400, 300, 'bg');
        this.menuLogo = this.add.image(phaser.config.width / 2, phaser.config.height / 2-100, 'menu-logo');
        this.connectingBackBtn = this.add.image(phaser.config.width / 2-300, phaser.config.height / 2-260, 'connecting-back-btn').setInteractive();

        this.connectingBackBtn.on('pointerdown', function(){
            this.scene.start('menu');
            console.log("clicked");
        }, this )


    }

    update(){
        
    }
    
}