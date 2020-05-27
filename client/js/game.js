
class Game extends Phaser.Scene {
    constructor() {
      super("game");
        
    }

  
    preload(){

        //Preload Audio
        var correctAudio = this.load.audio('correct-tone', '/client/assets/sounds/correct-tone.mp3')
        var wrongAudio = this.load.audio('error-tone', '/client/assets/sounds/error-tone.mp3')

        //Preload Assets
        var wordMatch = this.load.image('match-the-word', '/client/assets/game-screen/match-the-word.png');
        var animalsGameScreen = this.load.image('animals-game-screen', '/client/assets/game-screen/animals-game-screen.png');
        var fruitsGameScreen = this.load.image('fruits-game-screen', '/client/assets/game-screen/fruits-game-screen.png');
        var cards = this.load.image('cards', '/client/assets/game-screen/cards.png');
        var disconnectGameScreen = this.load.image('disconnect-game-screen', '/client/assets/game-screen/disconnect-game-screen.png');
        var matchedScore = this.load.image('matched-score', '/client/assets/game-screen/matched-score.png');
        var logoGameScreen = this.load.image('logo-game-screen', '/client/assets/game-screen/logo-game-screen.png');
        var startBanner = this.load.image('start-banner', '/client/assets/banners/player-choosing-banner.png')
        var startText = this.load.image('start-text', '/client/assets/banners/start-text.png')

        //Preload Fruit Words

        var mikan = this.load.image('mikan', '/client/assets/game-screen/mikan.png');
        var ringo = this.load.image('ringo', '/client/assets/game-screen/ringo.png');
        var budou = this.load.image('budou', '/client/assets/game-screen/budou.png');
        var cheri = this.load.image('cheri', '/client/assets/game-screen/cheri.png');
        var ichigo = this.load.image('ichigo', '/client/assets/game-screen/ichigo.png');
        var remon = this.load.image('remon', '/client/assets/game-screen/remon.png');
        var suika = this.load.image('suika', '/client/assets/game-screen/suika.png');
        var banana = this.load.image('banana', '/client/assets/game-screen/banana.png');
        var painapuru = this.load.image('painapuru', '/client/assets/game-screen/painapuru.png');

        //Preload Fruits

        var watermelon = this.load.image('watermelon', '/client/assets/game-screen/watermelon-game.png');
        var bananas = this.load.image('bananas', '/client/assets/game-screen/banana-game.png');
        var strawberry = this.load.image('strawberry', '/client/assets/game-screen/strawberry-game.png');
        var orange = this.load.image('orange', '/client/assets/game-screen/orange-game.png');
        var grapes = this.load.image('grapes', '/client/assets/game-screen/grapes-game.png');
        var pineapple = this.load.image('pineapple', '/client/assets/game-screen/pineapple-game.png');
        var apple = this.load.image('apple', '/client/assets/game-screen/apple-game.png');
        var lemon = this.load.image('lemon', '/client/assets/game-screen/lemon-game.png');
        var cherry = this.load.image('cherry', '/client/assets/game-screen/cherry-game.png');

        
    }

    create(){

        //Adding Audio
        var correctTone = this.sound.add('correct-tone');
        var errorTone = this.sound.add('error-tone');

        game.correctTone = correctTone
        game.errorTone = errorTone

        //Adding Assets
        this.wordMatch = this.add.image(phaser.config.width / 2-244, phaser.config.height / 2-160, 'match-the-word');
        this.fruitsGameScreen = this.add.image(phaser.config.width / 2+284, phaser.config.height / 2-200, 'fruits-game-screen');
        this.cards = this.add.image(phaser.config.width / 2+145, phaser.config.height / 2+90, 'cards');
        this.disconnectGameScreen = this.add.image(phaser.config.width / 2+310, phaser.config.height / 2-140, 'disconnect-game-screen').setInteractive();
        this.matchedScore = this.add.image(phaser.config.width / 2-245, phaser.config.height / 2+123, 'matched-score');
        this.logoGameScreen = this.add.image(phaser.config.width / 2, phaser.config.height / 2-195, 'logo-game-screen');

        //RandomNumberChooser Class
        class RandomNumberChooser {
            constructor(fruitWords, fruits){
                this.fruitWords = fruitWords;
                this.fruits = fruits;

            }
            
            //Returns a random index from 1-9 to attach to each element in fruitwords and fruits arrays 
            getRandomNumber(){
                var randomNumber = Math.floor(Math.random() * 9);
                
                return this.fruitWords[randomNumber]
               // return this.animalWords[randomNumber]
                return this.fruits[randomNumber]
            }

            
        }

        //Declaring fruitwords array 
        var fruitWords = ['suika', 'ringo', 'mikan', 'remon', 'painapuru', 'cheri', 'banana', 'budou', 'ichigo'];
        
        //shuffles the array
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

        //Declaring fruits array 
        var fruits = ['watermelon', 'apple', 'orange', 'lemon', 'pineapple', 'cherry', 'bananas', 'grapes', 'strawberry']

        game.fruits = fruits 


        shuffle(fruits);
        //shuffle(animals);
       
       
        
        //var randomAnimal = new RandomNumberChooser(animalWords);
        
        // var randomFruitWord = randomFruit.getRandomNumber();
        // console.log(randomFruitWord)

        // var randomAnimalWord = randomAnimal.getRandomNumber();
        // console.log(randomAnimalWord)
        
        game = this; 
          
        var newFruitWord = function(){ 
            //Generates a random word from the fruitWords array and puts it into the variable 'randomFruitWord' 
            var randomFruit = new RandomNumberChooser(fruitWords); 
            var randomFruitWord = randomFruit.getRandomNumber(); 

            //Adds image to the variable 
            var randomFruitWord = game.add.image(phaser.config.width / 2-250, phaser.config.height / 2-145, randomFruitWord );

            //Adds a variable that references the .texture.key property (name of element)
            var randomFruitWordKey = randomFruitWord.texture.key
            
            //References for use outside scope
            game.randomFruitWordKey = randomFruitWordKey;
            game.randomFruitWord = randomFruitWord;
        }

        //Creates a new fruitWord
        newFruitWord();

        //Adds the fruits into variables 'randomFruit[index]' 
        //Because of the shuffle, they are all random indexes 
        var randomFruit0 = fruits[0] 
        var randomFruit1 = fruits[1]
        var randomFruit2 = fruits[2]
        var randomFruit3 = fruits[3]
        var randomFruit4 = fruits[4]
        var randomFruit5 = fruits[5]
        var randomFruit6 = fruits[6]
        var randomFruit7 = fruits[7]
        var randomFruit8 = fruits[8]

        
        //randomised fruit cards 

            //Adds the Images for the random Fruits
            this.randomFruit0 = this.add.image(phaser.config.width / 2-43, phaser.config.height / 2-37, randomFruit0).setInteractive();
            this.randomFruit1  = this.add.image(phaser.config.width / 2+145, phaser.config.height / 2-37, randomFruit1).setInteractive();
            this.randomFruit2  = this.add.image(phaser.config.width / 2+335, phaser.config.height / 2-37, randomFruit2).setInteractive();

            this.randomFruit3 = this.add.image(phaser.config.width / 2-40, phaser.config.height / 2+93, randomFruit3).setInteractive();
            this.randomFruit4 = this.add.image(phaser.config.width / 2+335, phaser.config.height / 2+93, randomFruit4).setInteractive();
            this.randomFruit5 = this.add.image(phaser.config.width / 2+145, phaser.config.height / 2+93, randomFruit5).setInteractive();

            this.randomFruit6 = this.add.image(phaser.config.width / 2-40, phaser.config.height / 2+220, randomFruit6).setInteractive();
            this.randomFruit7 = this.add.image(phaser.config.width / 2+335, phaser.config.height / 2+220, randomFruit7).setInteractive();
            this.randomFruit8 = this.add.image(phaser.config.width / 2+145, phaser.config.height / 2+220, randomFruit8).setInteractive();


        //If Client receives the 'correct' message from the server...
        //Add 1 to the opponent's score
        Client.socket.on('correct', function (){
            oppScore++
            console.log('correct')
        });
        Client.socket.on('wrong', function (){
           console.log('wrong')
        });

        //Function addClicker to check whether an image matches the word
        function addClicker(image){
            console.log(image)
            if(image == 'apple'){ //if Image is equal to name of fruit
                if(game.randomFruitWordKey == 'ringo'){ //check if the randomFruitWordKey (name) is equal to the equivilent Japanese name
                    Client.socket.emit('serverCorrect'); //If correct, emit 'serverCorrect
                    score++ //Add to the score
                    correctTone.play(); //Play the audio for 'correct' 
                }else{
                    Client.socket.emit('serverWrong');
                    errorTone.play();
                }
                console.log(score)
                
            }

            //Repeats for all fruits in the array

            if(image == 'orange'){
                if(game.randomFruitWordKey == 'mikan'){
                    Client.socket.emit('serverCorrect');
                    score++
                    correctTone.play();
                }else{
                    Client.socket.emit('serverWrong');
                    errorTone.play();
                }
                console.log(score)
            }

            if(image == 'pineapple'){
                if(game.randomFruitWordKey == 'painapuru'){
                    Client.socket.emit('serverCorrect');
                    score++
                    correctTone.play();
                }else{
                    Client.socket.emit('serverWrong');
                    errorTone.play();
                }
                console.log(score)
            }

            if(image == 'strawberry'){
                if(game.randomFruitWordKey == 'ichigo'){
                    Client.socket.emit('serverCorrect');
                    score++
                    correctTone.play();
                }else{
                    Client.socket.emit('serverWrong');
                    errorTone.play();
                }
                console.log(score)
            }

            if(image == 'cherry'){
                if(game.randomFruitWordKey == 'cheri'){
                    Client.socket.emit('serverCorrect');
                    score++
                    correctTone.play();
                }else{
                    Client.socket.emit('serverWrong');
                    errorTone.play();
                }
                console.log(score)
            }

            
            if(image == 'grapes'){
                if(game.randomFruitWordKey == 'budou'){
                    Client.socket.emit('serverCorrect');
                    score++
                    correctTone.play();
                }else{
                    Client.socket.emit('serverWrong');
                    errorTone.play();
                }
                console.log(score)
            }

            
            if(image == 'bananas'){
                if(game.randomFruitWordKey == 'banana'){
                    Client.socket.emit('serverCorrect');
                    score++
                    correctTone.play();
                }else{
                    Client.socket.emit('serverWrong');
                    errorTone.play();
                }
                console.log(score)
            }

            
            if(image == 'watermelon'){
                if(game.randomFruitWordKey == 'suika'){
                    Client.socket.emit('serverCorrect');
                    score++
                    correctTone.play();
                }else{
                    Client.socket.emit('serverWrong');
                    errorTone.play();
                }
                console.log(score)
            }

            
            if(image == 'lemon'){
                if(game.randomFruitWordKey == 'remon'){
                    Client.socket.emit('serverCorrect');
                    score++
                    correctTone.play();
                }else{
                    Client.socket.emit('serverWrong');
                    errorTone.play();
                }
                console.log(score)
            }


        }

       //When the card is clicked...
        this.randomFruit0.on('pointerdown', function(){

            addClicker(randomFruit0);           // 'addClicker' function is run for the first index of randomFruit to check the answer...

            game.randomFruitWord.destroy();     // The random word is destroyed/removed...
            newFruitWord();                     // A new random word is created.
            
        });

        //Repeated for each randomFruit index 0-8
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

        //Random Fruits 0-8 are added to variables to be animated with tweens...
        var fruit0 = this.randomFruit0
        var fruit1 = this.randomFruit1
        var fruit2 = this.randomFruit2
        var fruit3 = this.randomFruit3
        var fruit4 = this.randomFruit4
        var fruit5 = this.randomFruit5
        var fruit6 = this.randomFruit6
        var fruit7 = this.randomFruit7
        var fruit8 = this.randomFruit8

        //Animating the fruits (cards)
        this.tweens.add({

            targets: [fruit0, fruit1, fruit2, fruit3, fruit4, fruit5, fruit6, fruit7, fruit8],
            angle: 20,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
    
        });

        //A default style 
        var style = { font: "80px Calibri", fill: "#2c6797", align: "center" };

        //Timer Style
        var timerStyle = {font: "20px Calibri", fill: "#000000", align: "center"};

        //Adding the score text using the score variable and the default style...
        var scoreText = this.add.text(phaser.config.width / 2-265, phaser.config.height / 2+20, score, style); 
        game.scoreText = scoreText; //Adding a reference to scoreText

        var oppScoreText = this.add.text(phaser.config.width / 2-265, phaser.config.height / 2+180, oppScore, style); 
        game.oppScoreText = oppScoreText; 

        //Function for when the game has ended...
        function gameEnd(){
            var finishStyle = {font: '50px calibri', fill: '#000000', } 
            var finishText = game.add.text(phaser.config.width / 2-200, phaser.config.height / 2, style) 
            
            //If your score is higher than the opponent score, you win, else, you lose.
            if(score > oppScore){
                finishText.setText('YOU WIN');
            }else{
                finishText.setText('YOU LOSE');
            }

            game.scene.pause(); //Pause the scene

            setTimeout(function(){   //Set timeout then return to menu
                game.scene.start('menu')
                score = 0; //Set score back to 0
            },5000)
        }

        var timerText = this.add.text(phaser.config.width / 2-300, phaser.config.height / 2-95, timer, timerStyle);
        game.timerText = timerText;

        //Add timer event with a delay of 30000...
        //When timer ends, add gameEnd callback function
        timer = this.time.addEvent({ delay: 30000, callback: gameEnd}) 

      
        game.timer = timer; //Reference to timer 
    }

    update(game){

        game = this
        
        game.scoreText.setText(score); //updates the text for the score
        game.oppScoreText.setText(oppScore); //updates the text for the score

        //Gets the progress of the timer...
        //Adds progress to text
        game.timerText.setText('Timer: ' + game.timer.getProgress().toString().substr(0, 4)); 
        
        }
    
    }
    