
//Defining Variables
let game;
let score = 0;
let oppScore = 0;
var timer;
let player1;



//Game config
var config = {
    type   : Phaser.AUTO,
    parent : 'phaser-app',
    title  : 'Nihongo Match',
    width  : 800,
    height : 600,
    backgroundColor : '#fff',
    scene  : 
    [
        Menu,
        Connect,
        Study,
        Game
    ]
    
};

//Game app
phaser = new Phaser.Game(config);

//Globals
phaser.CONFIG   = {
    width   : config.width,
    height  : config.height,
    centerX : Math.round(0.5 * config.width),
    centerY : Math.round(0.5 * config.height),
    tile    : 16,

};


//Audio config

function bgmAudio(){
	var bgm = new Audio('/client/assets/sounds/bgm.mp3');
	bgm.volume = 0.4;
	bgm.loop = true;
	bgm.play();		
}

//bgmAudio();