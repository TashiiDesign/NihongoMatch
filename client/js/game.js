class Game extends Phaser.Scene {
    constructor() {
      super("game");
        
    }

  
    preload(){

        //assets
        var wordMatch = this.load.image('match-the-word', '/client/assets/game-screen/match-the-word.png');
        var animalsGameScreen = this.load.image('animals-game-screen', '/client/assets/game-screen/animals-game-screen.png');
        var fruitsGameScreen = this.load.image('fruits-game-screen', '/client/assets/game-screen/fruits-game-screen.png');
        var cards = this.load.image('cards', '/client/assets/game-screen/cards.png');
        var disconnectGameScreen = this.load.image('disconnect-game-screen', '/client/assets/game-screen/disconnect-game-screen.png');
        var matchedScore = this.load.image('matched-score', '/client/assets/game-screen/matched-score.png');
        var logoGameScreen = this.load.image('logo-game-screen', '/client/assets/game-screen/logo-game-screen.png');

        //words to match fruits

        var mikan = this.load.image('mikan', '/client/assets/game-screen/mikan.png');
        var ringo = this.load.image('ringo', '/client/assets/game-screen/ringo.png');
        var budou = this.load.image('budou', '/client/assets/game-screen/budou.png');
        var cheri = this.load.image('cheri', '/client/assets/game-screen/cheri.png');
        var ichigo = this.load.image('ichigo', '/client/assets/game-screen/ichigo.png');
        var remon = this.load.image('remon', '/client/assets/game-screen/remon.png');
        var suika = this.load.image('suika', '/client/assets/game-screen/suika.png');
        var banana = this.load.image('banana', '/client/assets/game-screen/banana.png');
        var painapuru = this.load.image('painapuru', '/client/assets/game-screen/painapuru.png');


        //words to match animals

        var chou = this.load.image('chou', '/client/assets/game-screen/chou.png');
        var kaeru = this.load.image('kaeru', '/client/assets/game-screen/kaeru.png');
        var kame = this.load.image('kame', '/client/assets/game-screen/kame.png');
        var ika = this.load.image('ika', '/client/assets/game-screen/ika.png');
        var neko = this.load.image('neko', '/client/assets/game-screen/neko.png');
        var inu = this.load.image('inu', '/client/assets/game-screen/inu.png');
        var hebi = this.load.image('hebi', '/client/assets/game-screen/hebi.png');
        var katatsumuri = this.load.image('katatsumuri', '/client/assets/game-screen/katatsumuri.png');
        var tori = this.load.image('tori', '/client/assets/game-screen/tori.png');

        //fruit images

        var watermelon = this.load.image('watermelon', '/client/assets/game-screen/watermelon-game.png');
        var bananas = this.load.image('bananas', '/client/assets/game-screen/banana-game.png');
        var strawberry = this.load.image('strawberry', '/client/assets/game-screen/strawberry-game.png');
        var orange = this.load.image('orange', '/client/assets/game-screen/orange-game.png');
        var grapes = this.load.image('grapes', '/client/assets/game-screen/grapes-game.png');
        var pineapple = this.load.image('pineapple', '/client/assets/game-screen/pineapple-game.png');
        var apple = this.load.image('apple', '/client/assets/game-screen/apple-game.png');
        var lemon = this.load.image('lemon', '/client/assets/game-screen/lemon-game.png');
        var cherry = this.load.image('cherry', '/client/assets/game-screen/cherry-game.png');

        //animal images

        var butterfly = this.load.image('butterfly', '/client/assets/game-screen/butterfly-game.png');
        var frog = this.load.image('frog', '/client/assets/game-screen/frog-game.png');
        var turtle = this.load.image('turtle', '/client/assets/game-screen/turtle-game.png');
        var squid = this.load.image('squid', '/client/assets/game-screen/squid-game.png');
        var bird = this.load.image('bird', '/client/assets/game-screen/bird-game.png');
        var cat = this.load.image('cat', '/client/assets/game-screen/cat-game.png');
        var dog = this.load.image('dog', '/client/assets/game-screen/dog-game.png');
        var snail = this.load.image('snail', '/client/assets/game-screen/snail-game.png');
        var snake = this.load.image('snake', '/client/assets/game-screen/snake-game.png');

        
    }

    create(){



        this.wordMatch = this.add.image(phaser.config.width / 2-244, phaser.config.height / 2-160, 'match-the-word');
        //this.animalsGameScreen = this.add.image(phaser.config.width / 2+284, phaser.config.height / 2-200, 'animals-game-screen');
        this.fruitsGameScreen = this.add.image(phaser.config.width / 2+284, phaser.config.height / 2-200, 'fruits-game-screen');
        this.cards = this.add.image(phaser.config.width / 2+145, phaser.config.height / 2+90, 'cards');
        this.disconnectGameScreen = this.add.image(phaser.config.width / 2+310, phaser.config.height / 2-140, 'disconnect-game-screen');
        this.matchedScore = this.add.image(phaser.config.width / 2-245, phaser.config.height / 2+123, 'matched-score');
        this.logoGameScreen = this.add.image(phaser.config.width / 2, phaser.config.height / 2-195, 'logo-game-screen');

    
        class RandomNumberChooser {
            constructor(fruitWords, animalWords, fruits, animals){
                this.fruitWords = fruitWords;
                this.animalWords = animalWords;
                this.fruits = fruits;
                this.animals = animals;

            }
            

            getRandomNumber(){
                var randomNumber = Math.floor(Math.random() * 9);
                
                return this.fruitWords[randomNumber]
                return this.animalWords[randomNumber]
                return this.fruits[randomNumber]

            }

            
        }

        
        var fruitWords = ['suika', 'ringo', 'mikan', 'remon', 'painapuru', 'cheri', 'banana', 'budou', 'ichigo'];
        var animalWords = ['inu', 'neko', 'chou', 'kaeru', 'kame', 'ika', 'hebi', 'katatsumuri', 'tori'];
        
        //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

        function shuffle(arr) {
            var currentIndex = arr.length, temporaryValue, randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              // And swap it with the current element.
              temporaryValue = arr[currentIndex];
              arr[currentIndex] = arr[randomIndex];
              arr[randomIndex] = temporaryValue;
            }
          
            return arr;
          }

        var fruits = ['watermelon', 'apple', 'orange', 'lemon', 'pineapple', 'cherry', 'bananas', 'grapes', 'strawberry']
        var animals = ['butterfly', 'frog', 'turtle', 'dog', 'cat', 'squid', 'snake', 'snail', 'bird']

        game.fruits = fruits


        shuffle(fruits);
        shuffle(animals);
        console.log(animals)
       
       
        
        var randomAnimal = new RandomNumberChooser(animalWords);
        
        // var randomFruitWord = randomFruit.getRandomNumber();
        // console.log(randomFruitWord)

        var randomAnimalWord = randomAnimal.getRandomNumber();
        console.log(randomAnimalWord)
        
          game = this; 
          
        var newFruitWord = function(){

            var randomFruit = new RandomNumberChooser(fruitWords);
            var randomFruitWord = randomFruit.getRandomNumber();
            var randomFruitWord = game.add.image(phaser.config.width / 2-250, phaser.config.height / 2-145, randomFruitWord );
            var randomFruitWordKey = randomFruitWord.texture.key
        
            game.randomFruitWordKey = randomFruitWordKey;
            game.randomFruitWord = randomFruitWord;
        }

        newFruitWord();

        //this.randomAnimalWord = this.add.image(phaser.config.width / 2-250, phaser.config.height / 2-145, randomAnimalWord );

        var randomFruit0 = fruits[0]
        var randomFruit1 = fruits[1]
        var randomFruit2 = fruits[2]
        var randomFruit3 = fruits[3]
        var randomFruit4 = fruits[4]
        var randomFruit5 = fruits[5]
        var randomFruit6 = fruits[6]
        var randomFruit7 = fruits[7]
        var randomFruit8 = fruits[8]

        var randomAnimal0 = animals[0]
        var randomAnimal1 = animals[1]
        var randomAnimal2 = animals[2]
        var randomAnimal3 = animals[3]
        var randomAnimal4 = animals[4]
        var randomAnimal5 = animals[5]
        var randomAnimal6 = animals[6]
        var randomAnimal7 = animals[7]
        var randomAnimal8 = animals[8]

        
        //randomised fruit cards 


            this.randomFruit0 = this.add.image(phaser.config.width / 2-43, phaser.config.height / 2-37, randomFruit0).setInteractive();
            this.randomFruit1  = this.add.image(phaser.config.width / 2+145, phaser.config.height / 2-37, randomFruit1).setInteractive();
            this.randomFruit2  = this.add.image(phaser.config.width / 2+335, phaser.config.height / 2-37, randomFruit2).setInteractive();

            this.randomFruit3 = this.add.image(phaser.config.width / 2-40, phaser.config.height / 2+93, randomFruit3).setInteractive();
            this.randomFruit4 = this.add.image(phaser.config.width / 2+335, phaser.config.height / 2+93, randomFruit4).setInteractive();
            this.randomFruit5 = this.add.image(phaser.config.width / 2+145, phaser.config.height / 2+93, randomFruit5).setInteractive();

            this.randomFruit6 = this.add.image(phaser.config.width / 2-40, phaser.config.height / 2+220, randomFruit6).setInteractive();
            this.randomFruit7 = this.add.image(phaser.config.width / 2+335, phaser.config.height / 2+220, randomFruit7).setInteractive();
            this.randomFruit8 = this.add.image(phaser.config.width / 2+145, phaser.config.height / 2+220, randomFruit8).setInteractive();


         //randomsied animal cards 

        // this.randomAnimal0 = this.add.image(phaser.config.width / 2-43, phaser.config.height / 2-37, randomAnimal0).setInteractive();
        // this.randomAnimal1  = this.add.image(phaser.config.width / 2+145, phaser.config.height / 2-37, randomAnimal1).setInteractive();
        // this.randomAnimal2  = this.add.image(phaser.config.width / 2+335, phaser.config.height / 2-37, randomAnimal2).setInteractive();

        // this.randomAnimal3 = this.add.image(phaser.config.width / 2-40, phaser.config.height / 2+93, randomAnimal3).setInteractive();
        // this.randomAnimal4 = this.add.image(phaser.config.width / 2+335, phaser.config.height / 2+93, randomAnimal4).setInteractive();
        // this.randomAnimal5 = this.add.image(phaser.config.width / 2+145, phaser.config.height / 2+93, randomAnimal5).setInteractive();

        // this.randomAnimal6 = this.add.image(phaser.config.width / 2-40, phaser.config.height / 2+220, randomAnimal6).setInteractive();
        // this.randomAnimal7 = this.add.image(phaser.config.width / 2+335, phaser.config.height / 2+220, randomAnimal7).setInteractive();
        // this.randomAnimal8 = this.add.image(phaser.config.width / 2+145, phaser.config.height / 2+220, randomAnimal8).setInteractive();

        Client.socket.on('correct', function (){
            oppScore++
            console.log('correct')
        });
        Client.socket.on('wrong', function (){
           console.log('wrong')
        });

        
        function addClicker(image){
            console.log(image)
            if(image == 'apple'){
                if(game.randomFruitWordKey == 'ringo'){
                    Client.socket.emit('serverCorrect');
                    score++
                }else{
                    Client.socket.emit('serverWrong');
                }
                console.log(score)
                
            }

            if(image == 'orange'){
                if(game.randomFruitWordKey == 'mikan'){
                    Client.socket.emit('serverCorrect');
                    score++
                }else{
                    Client.socket.emit('serverWrong');
                }
                console.log(score)
            }

            if(image == 'pineapple'){
                if(game.randomFruitWordKey == 'painapuru'){
                    Client.socket.emit('serverCorrect');
                    score++
                }else{
                    Client.socket.emit('serverWrong');
                }
                console.log(score)
            }

            if(image == 'strawberry'){
                if(game.randomFruitWordKey == 'ichigo'){
                    Client.socket.emit('serverCorrect');
                    score++
                }else{
                    Client.socket.emit('serverWrong');
                }
                console.log(score)
            }

            if(image == 'cherry'){
                if(game.randomFruitWordKey == 'cheri'){
                    Client.socket.emit('serverCorrect');
                    score++
                }else{
                    Client.socket.emit('serverWrong');
                }
                console.log(score)
            }

            
            if(image == 'grapes'){
                if(game.randomFruitWordKey == 'budou'){
                    Client.socket.emit('serverCorrect');
                    score++
                }else{
                    Client.socket.emit('serverWrong');
                }
                console.log(score)
            }

            
            if(image == 'bananas'){
                if(game.randomFruitWordKey == 'banana'){
                    Client.socket.emit('serverCorrect');
                    score++
                }else{
                    Client.socket.emit('serverWrong');
                }
                console.log(score)
            }

            
            if(image == 'watermelon'){
                if(game.randomFruitWordKey == 'suika'){
                    Client.socket.emit('serverCorrect');
                    score++
                }else{
                    Client.socket.emit('serverWrong');
                }
                console.log(score)
            }

            
            if(image == 'lemon'){
                if(game.randomFruitWordKey == 'remon'){
                    Client.socket.emit('serverCorrect');
                    score++
                }else{
                    Client.socket.emit('serverWrong');
                }
                console.log(score)
            }


        }

        
        this.randomFruit0.on('pointerdown', function(){

            addClicker(randomFruit0);
            game.randomFruitWord.destroy(); 
            newFruitWord();
            randomFruit0
            
        });

        this.randomFruit1.on('pointerdown', function(){

            addClicker(randomFruit1);

            game.randomFruitWord.destroy(); 
            newFruitWord();
        });

        this.randomFruit2.on('pointerdown', function(){

            addClicker(randomFruit2);

            game.randomFruitWord.destroy(); 
            newFruitWord();
        });

        this.randomFruit3.on('pointerdown', function(){

            addClicker(randomFruit3);

            game.randomFruitWord.destroy(); 
            newFruitWord();
        });

        this.randomFruit4.on('pointerdown', function(){

            addClicker(randomFruit4);

            game.randomFruitWord.destroy(); 
            newFruitWord();
        });

        this.randomFruit5.on('pointerdown', function(){

            addClicker(randomFruit5);

            game.randomFruitWord.destroy(); 
            newFruitWord();
        });

        this.randomFruit6.on('pointerdown', function(){

            addClicker(randomFruit6);

            game.randomFruitWord.destroy(); 
            newFruitWord();
        });

        this.randomFruit7.on('pointerdown', function(){

            addClicker(randomFruit7);

            game.randomFruitWord.destroy(); 
            newFruitWord();
        });

        this.randomFruit8.on('pointerdown', function(){

            addClicker(randomFruit8);

            game.randomFruitWord.destroy(); 
            newFruitWord();
        });

        var fruit0 = this.randomFruit0
        var fruit1 = this.randomFruit1
        var fruit2 = this.randomFruit2
        var fruit3 = this.randomFruit3
        var fruit4 = this.randomFruit4
        var fruit5 = this.randomFruit5
        var fruit6 = this.randomFruit6
        var fruit7 = this.randomFruit7
        var fruit8 = this.randomFruit8


        this.tweens.add({

            targets: [fruit0, fruit1, fruit2, fruit3, fruit4, fruit5, fruit6, fruit7, fruit8],
            angle: 20,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
    
        });


        var style = { font: "80px Calibri", fill: "#2c6797", align: "center" };

        var timerStyle = {font: "20px Calibri", fill: "#000000", align: "center"};

        var scoreText = this.add.text(phaser.config.width / 2-265, phaser.config.height / 2+20, score, style); 
        game.scoreText = scoreText; 

        var oppScoreText = this.add.text(phaser.config.width / 2-265, phaser.config.height / 2+180, oppScore, style); 
        game.oppScoreText = oppScoreText; 



        function gameEnd(){
            var finishStyle = {font: '50px calibri', fill: '#000000', }
            //var finishText = game.add.text(phaser.config.width / 2-200, phaser.config.height / 2, playerName, finishStyle)
            
           // finishText.setText('PLAYER ' + player1Name + ' WINS');
            game.scene.pause();

            setTimeout(function(){   
                game.scene.start('menu')
                score = 0;
            },5000)
        }

        var timerText = this.add.text(phaser.config.width / 2-300, phaser.config.height / 2-95, timer, timerStyle);
        game.timerText = timerText;

        timer = this.time.addEvent({ delay: 70000, callback: gameEnd})

      
        game.timer = timer;
    }

    update(game){

        game = this
        
        game.scoreText.setText(score); //updates the text for the score
        game.oppScoreText.setText(oppScore); //updates the text for the score

        
        game.timerText.setText('Timer: ' + game.timer.getProgress().toString().substr(0, 4));
        
        }
    
    }
    