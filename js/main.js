//variables
let game;

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


