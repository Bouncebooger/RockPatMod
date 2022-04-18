class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        this.load.audio('sfx_select','./Assets/selectscene.wav.wav');
        this.load.audio('sfx_explosion','./Assets/lose.wav.wav');
        this.load.audio('sfx_rocket','./Assets/boombaby.wav.wav');
    }

create() {
 
    let menuConfig = {
        fontFamily: 'Courier',
        fontSize: '28px',
        backgroundColor: '#a5ff00',
        color: '#843605',
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }

    menuConfig.backgroundColor = '#ff0000';
menuConfig.color = '#ffffff';
for (let ii = 0; ii < game.config.height; ii+=20){
this.add.text(game.config.width/2,ii,'WHY MISTER WHY MISTER WHYMISTERWHYMISTERWHYMISTER',menuConfig).setOrigin(0.5);
}

//
menuConfig.backgroundColor = '#a5ff00';
        menuConfig.color = '#843605';
this.add.text(game.config.width/2,game.config.height/2 - borderUISize - borderPadding -100, ' STOPSTOP IT sSTOP IT \n I DOD NO PLS SATY AWAYS', menuConfig).setOrigin(0.5);

this.add.text(game.config.width/2 +50,game.config.height/2 -30,'SHOTT THEMMS, W or ^ ',menuConfig).setOrigin(1);
this.add.text(game.config.width/2 ,game.config.height/2 ,'PLEASE PLPAS PPLEASE I""LL DO NYTHing \n ID ONT LIKKE IT NON OSTOP',menuConfig).setOrigin(0.5);
menuConfig.backgroundColor = '#00FF00';
menuConfig.color = '#2400ff';
this.add.text(game.config.width/2,game.config.height/2 -75,'MOVE A,D,->,<-,Move://',menuConfig).setOrigin(0.5);
this.add.text(game.config.width/2,game.config.height/2 + borderUISize + borderPadding + 20,'1: <- WEAKWEAKWEAK/ \n2: ^ SOMEONE ANYWONE HELP\n 3: ->, I CANT IT HURTS', menuConfig).setOrigin(0.5);

keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
}

update() {
    if (Phaser.Input.Keyboard.JustDown(keyLEFT)){
        game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000,
            plyrCnt: 1
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');

    }
    if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {

        game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000,
            plyrCnt : 1
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');


    }
    if (Phaser.Input.Keyboard.JustDown(keyUP)){
        game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 70000,
            plyrCnt : 2
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');
    }
}

}