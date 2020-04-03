class Game extends Phaser.Scene {
    constructor() {
      super("game");
        
    }

  
    preload(){

        //assets
        var wordMatch = this.load.image('match-the-word', '../assets/game-screen/match-the-word.png');
        var animalsGameScreen = this.load.image('animals-game-screen', '../assets/game-screen/animals-game-screen.png');
        var fruitsGameScreen = this.load.image('fruits-game-screen', '../assets/game-screen/fruits-game-screen.png');
        var cards = this.load.image('cards', '../assets/game-screen/cards.png');
        var disconnectGameScreen = this.load.image('disconnect-game-screen', '../assets/game-screen/disconnect-game-screen.png');
        var matchedScore = this.load.image('matched-score', '../assets/game-screen/matched-score.png');
        var logoGameScreen = this.load.image('logo-game-screen', '../assets/game-screen/logo-game-screen.png');

        //words to match fruits

        var mikan = this.load.image('mikan', '../assets/game-screen/mikan.png');
        var ringo = this.load.image('ringo', '../assets/game-screen/ringo.png');
        var budou = this.load.image('budou', '../assets/game-screen/budou.png');
        var cheri = this.load.image('cheri', '../assets/game-screen/cheri.png');
        var ichigo = this.load.image('ichigo', '../assets/game-screen/ichigo.png');
        var remon = this.load.image('remon', '../assets/game-screen/remon.png');
        var suika = this.load.image('suika', '../assets/game-screen/suika.png');
        var banana = this.load.image('banana', '../assets/game-screen/banana.png');
        var painapuru = this.load.image('painapuru', '../assets/game-screen/painapuru.png');


        //words to match animals

        var chou = this.load.image('chou', '../assets/game-screen/chou.png');
        var kaeru = this.load.image('kaeru', '../assets/game-screen/kaeru.png');
        var kame = this.load.image('kame', '../assets/game-screen/kame.png');
        var ika = this.load.image('ika', '../assets/game-screen/ika.png');
        var neko = this.load.image('neko', '../assets/game-screen/neko.png');
        var inu = this.load.image('inu', '../assets/game-screen/inu.png');
        var hebi = this.load.image('hebi', '../assets/game-screen/hebi.png');
        var katatsumuri = this.load.image('katatsumuri', '../assets/game-screen/katatsumuri.png');
        var tori = this.load.image('tori', '../assets/game-screen/tori.png');

        //fruit images

        var watermelon = this.load.image('watermelon', '../assets/game-screen/watermelon-game.png');
        var bananas = this.load.image('bananas', '../assets/game-screen/banana-game.png');
        var strawberry = this.load.image('strawberry', '../assets/game-screen/strawberry-game.png');
        var orange = this.load.image('orange', '../assets/game-screen/orange-game.png');
        var grapes = this.load.image('grapes', '../assets/game-screen/grapes-game.png');
        var pineapple = this.load.image('pineapple', '../assets/game-screen/pineapple-game.png');
        var apple = this.load.image('apple', '../assets/game-screen/apple-game.png');
        var lemon = this.load.image('lemon', '../assets/game-screen/lemon-game.png');
        var cherry = this.load.image('cherry', '../assets/game-screen/cherry-game.png');

        //animal images

        var butterfly = this.load.image('butterfly', '../assets/game-screen/butterfly-game.png');
        var frog = this.load.image('frog', '../assets/game-screen/frog-game.png');
        var turtle = this.load.image('turtle', '../assets/game-screen/turtle-game.png');
        var squid = this.load.image('squid', '../assets/game-screen/squid-game.png');
        var bird = this.load.image('bird', '../assets/game-screen/bird-game.png');
        var cat = this.load.image('cat', '../assets/game-screen/cat-game.png');
        var dog = this.load.image('dog', '../assets/game-screen/dog-game.png');
        var snail = this.load.image('snail', '../assets/game-screen/snail-game.png');
        var snake = this.load.image('snake', '../assets/game-screen/snake-game.png');

        
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


        shuffle(fruits);
        shuffle(animals);
        console.log(animals)
       

        var randomFruit = new RandomNumberChooser(fruitWords);
        var randomAnimal = new RandomNumberChooser(animalWords);
        
        var randomFruitWord = randomFruit.getRandomNumber();
        console.log(randomFruitWord)

        var randomAnimalWord = randomAnimal.getRandomNumber();
        console.log(randomAnimalWord)
        

        this.randomFruitWord = this.add.image(phaser.config.width / 2-250, phaser.config.height / 2-145, randomFruitWord );
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

        var correct = 0;


        // this.randomFruit0.on('pointerdown', function(){


        //     if(randomFruit0 == 'apple'){
                
        //         if(randomFruitWord === 'ringo'){
        //             correct++
        //             console.log(correct)
        //         }else {
        //             console.log(correct)
                    
        //         }
        //     }

        // })



        class Image{
            constructor(){
                this.wordMap = new Map();
                this.wordMap['apple'] = 'ringo';
            }
        }
    
        var image = new Image();

        // wordMap.set('apple','ringo')
        // wordMap.set('orange','mikan')
        // wordMap.set('pineapple','painapuru')
        // wordMap.set('strawberry','ichigo')
        // wordMap.set('cherry','cheri')
        // wordMap.set('grapes','budou')
        // wordMap.set('bananas','banana')
        // wordMap.set('watermelon','suika')
        // wordMap.set('lemon','remon')

    //    this.wordmap.get('apple')
        this.map.prototype.size();

        this.randomFruit0.on('pointerdown', function(){

            // this.wordMap.get(randomFruit0)
        
            // if (wordMap[imageNameThatWasClicked] == wordMap[value]) {
        
            //       correct
        
            // }
        
        })

        // wordMap.get('apple')
        // console.log(randomFruit0)
        // console.log(randomFruitWord)

        // for (let [key, value] of wordMap) {
        //     var image = new Image(imageName, word)
        //     console.log(key + ' = ' + value)
        //   }


    }

    update(){
        
    }
    
}