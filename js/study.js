class Study extends Phaser.Scene {
    constructor() {
      super("study");
        
    }

  
    preload(){
        var studyBtn = this.load.image('study-btn', '../assets/start-screen/study.png');
        var bg = this.load.image('bg', '../assets/start-screen/start-screen-bg.png');
        var studyBg = this.load.image('study-bg', '../assets/study-screen/study-bg.png');
        var connectingBackBtn = this.load.image('connecting-back-btn', '../assets/connecting-screen/connecting-back-btn.png')

        //icons
        var appleStudy = this.load.image('appleStudy', '../assets/study-screen/apple.png');
        var bananaStudy = this.load.image('bananaStudy', '../assets/study-screen/banana.png');
        var birdStudy = this.load.image('birdStudy', '../assets/study-screen/bird.png');
        var butterflyStudy = this.load.image('butterflyStudy', '../assets/study-screen/butterfly.png');
        var catStudy = this.load.image('catStudy', '../assets/study-screen/cat.png');
        var cherryStudy = this.load.image('cherryStudy', '../assets/study-screen/cherry.png');
        var dogStudy = this.load.image('dogStudy', '../assets/study-screen/dog.png');
        var frogStudy = this.load.image('frogStudy', '../assets/study-screen/frog.png');
        var grapesStudy = this.load.image('grapesStudy', '../assets/study-screen/grapes.png');
        var lemonStudy = this.load.image('lemonStudy', '../assets/study-screen/lemon.png');
        var orangeStudy = this.load.image('orangeStudy', '../assets/study-screen/orange.png');
        var pineappleStudy = this.load.image('pineappleStudy', '../assets/study-screen/pineapple.png');
        var snailStudy = this.load.image('snailStudy', '../assets/study-screen/snail.png');
        var snakeStudy = this.load.image('snakeStudy', '../assets/study-screen/snake.png');
        var squidStudy = this.load.image('squidStudy', '../assets/study-screen/squid.png');
        var strawberryStudy = this.load.image('strawberryStudy', '../assets/study-screen/strawberry.png');
        var turtleStudy = this.load.image('turtleStudy', '../assets/study-screen/turtle.png');
        var watermelonStudy = this.load.image('watermelonStudy', '../assets/study-screen/watermelon.png');

        

    }

    create(){
        this.bg = this.add.image(400, 300, 'bg');
        this.studyBg = this.add.image(phaser.config.width / 2, phaser.config.height / 2+90, 'study-bg');
        this.studyBtn = this.add.image(phaser.config.width / 2, phaser.config.height / 2-190, 'study-btn')
        this.connectingBackBtn = this.add.image(phaser.config.width / 2-300, phaser.config.height / 2-260, 'connecting-back-btn').setInteractive();

        //icons
        this.watermelonStudy = this.add.image(phaser.config.width / 2-300, phaser.config.height / 2-50, 'watermelonStudy')
        this.orangeStudy = this.add.image(phaser.config.width / 2-300, phaser.config.height / 2+10, 'orangeStudy')
        this.grapesStudy = this.add.image(phaser.config.width / 2-300, phaser.config.height / 2+65, 'grapesStudy')
        this.pineappleStudy = this.add.image(phaser.config.width / 2-300, phaser.config.height / 2+125, 'pineappleStudy')
        this.bananaStudy = this.add.image(phaser.config.width / 2-300, phaser.config.height / 2+180, 'bananaStudy')
        this.strawberryStudy = this.add.image(phaser.config.width / 2-300, phaser.config.height / 2+235, 'strawberryStudy')

        this.cherryStudy = this.add.image(phaser.config.width / 2-50, phaser.config.height / 2-50, 'cherryStudy')
        this.lemonStudy = this.add.image(phaser.config.width / 2-50, phaser.config.height / 2+10, 'lemonStudy')
        this.appleStudy = this.add.image(phaser.config.width / 2-50, phaser.config.height / 2+65, 'appleStudy')
        this.dogStudy = this.add.image(phaser.config.width / 2-50, phaser.config.height / 2+125, 'dogStudy')
        this.birdStudy = this.add.image(phaser.config.width / 2-50, phaser.config.height / 2+180, 'birdStudy')
        this.snailStudy = this.add.image(phaser.config.width / 2-50, phaser.config.height / 2+235, 'snailStudy')

        this.frogStudy = this.add.image(phaser.config.width / 2+170, phaser.config.height / 2-50, 'frogStudy')
        this.snakeStudy = this.add.image(phaser.config.width / 2+170, phaser.config.height / 2+10, 'snakeStudy')
        this.turtleStudy = this.add.image(phaser.config.width / 2+170, phaser.config.height / 2+65, 'turtleStudy')
        this.squidStudy = this.add.image(phaser.config.width / 2+170, phaser.config.height / 2+125, 'squidStudy')
        this.butterflyStudy = this.add.image(phaser.config.width / 2+170, phaser.config.height / 2+180, 'butterflyStudy')
        this.catStudy = this.add.image(phaser.config.width / 2+170, phaser.config.height / 2+235, 'catStudy')

        this.connectingBackBtn.on('pointerdown', function(){
            this.scene.start('menu');
            console.log("clicked");
        }, this )




    }
    

    update(){

       
        
    }
    
}