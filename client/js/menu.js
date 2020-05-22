class Menu extends Phaser.Scene {
    constructor() {
      super("menu");
        
    }

  
    preload(){

        game = this;

        //loading assets
        var menuLogo = this.load.image('menu-logo', '/client/assets/start-screen/menu-logo.png');
        var bg = this.load.image('bg', '/client/assets/start-screen/start-screen-bg.png');
        var newGameBtn = this.load.image('new-game-btn', '/client/assets/start-screen/new-game.png');
        var studyBtn = this.load.image('study-btn', '/client/assets/start-screen/study.png');
        var exitBtnStartScreen = this.load.image('exit-button-start-screen', '/client/assets/start-screen/exit-button-start-screen.png');


    }

    create(){

        

        console.log("running")

        //placing assets 
        this.bg = this.add.image(400, 300, 'bg');
        this.menuLogo = this.add.image(phaser.config.width / 2, phaser.config.height / 2-100, 'menu-logo');
        this.newGameBtn = this.add.image(phaser.config.width / 2, phaser.config.height / 2+100, 'new-game-btn').setInteractive();
        this.studyBtn = this.add.image(phaser.config.width / 2, phaser.config.height / 2+200, 'study-btn').setInteractive();
        this.exitBtnStartScreen = this.add.image(phaser.config.width / 2-330, phaser.config.height / 2-260, 'exit-button-start-screen').setInteractive();

        //Sends the test function
        Client.sendTest();

        Client.askNewPlayer();


        this.newGameBtn.on('pointerdown', function(){
            this.scene.start('connect');
        }, this )

        this.studyBtn.on('pointerdown', function(){
            this.scene.start('study');
        }, this )
    }

    update(){
        
    }
    
}