class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

preload() {
    this.load.spritesheet('rocket','./Assets/slog-sheet.png',{frameWidth: 16, frameHeight: 8, startFrame: 0, endFrame:1});
    this.load.image('spaceship','./Assets/spaceship.png');
    this.load.image('starfield','./Assets/starfield.png');
    this.load.image('stungun','./Assets/stungun.png');
    this.load.image('faces','./Assets/faces.png');
    this.load.image('bar','./Assets/otherthing.png');
    this.load.image('bords','./Assets/border.png');
    this.load.spritesheet('explosion','./assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
}

create() {
this.starfield = this.add.tileSprite(0,0,640,480,'starfield').setOrigin(0,0);
this.faced = this.add.tileSprite(0,0,640,480,'faces').setOrigin(0,0);
this.blops1 = this.add.tileSprite(0, borderUISize + borderPadding, game.config.width, borderUISize * 2,'bar').setOrigin(0,0);
this.blops2 =this.add.tileSprite(0,0,game.config.width,borderUISize,'bords').setOrigin(0,0);
this.blops3 =this.add.tileSprite(0, game.config.height - borderUISize,game.config.width,borderUISize,'bords').setOrigin(0,0);
 this.blops4= this.add.tileSprite(0,0,borderUISize,game.config.height, 'bords').setOrigin(0,0);
this.blops5 =this.add.tileSprite(game.config.width - borderUISize, 0,borderUISize,game.config.height,'bords').setOrigin(0,0);
//this.p1Rocket = new Rocket(this,game.config.width/2,game.config.height - borderUISize - borderPadding, keyLEFT,keyRIGHT,keyF, 'rocket').setOrigin(0.5,0);
keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

this.p1Rocket = new Rocket(this,game.config.width/2,game.config.height - borderUISize - borderPadding,'rocket',0,'p1').setOrigin(0.5,0);
if(game.settings.plyrCnt == 2 ){



this.p2Rocket = new Rocket(this,game.config.width/2,game.config.height - borderUISize - borderPadding,'rocket',0,'p2').setOrigin(0.5,0);
}
this.ship01 = new Spaceship(this,game.config.width + borderUISize*6,borderUISize*4,'spaceship',0,30).setOrigin(0,0);
this.ship02 = new Spaceship(this,game.config.width + borderUISize*3,borderUISize*5 + borderPadding*2, 'spaceship', 0,20).setOrigin(0,0);
this.ship03 = new Spaceship(this,game.config.width,borderUISize*6 + borderPadding*4,'spaceship',0,10).setOrigin(0,0);


this.anims.create({
    key: 'explode',
    frames: this.anims.generateFrameNumbers('explosion',{start:0,end: 9, first: 0}),
    frameRate:30 
});
this.p1Score = 0 ;
let scoreConfig = {
    fontFamily: 'Tahoma',
    fontSize: '28px',
    backgroundColor: '#FF0000',
    color: '#843605',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 100
}



this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize +borderPadding*2,this.p1Score,scoreConfig);
this.gameOver = false;
scoreConfig.fixedWidth = 0;
this.clock = this.time.delayedCall(game.settings.gameTimer, () =>{
   this.add.text(game.config.width/2,game.config.height/2,'I AM FREE \n Iam free \n II Mm fre e',scoreConfig).setOrigin(0.5);
   this.add.text(game.config.width/2,game.config.height/2 +64,'(R) GET HIM GET HIM GET',
   scoreConfig).setOrigin(0.5);
   this.gameOver = true;
}, null, this);

}

update() {
    if ( this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)){
        this.scene.restart();
    }
    if (this.gameOver&& Phaser.Input.Keyboard.JustDown(keyLEFT)){
        this.scene.start("menuScene");
    }
    this.starfield.tilePositionX -= 4;
    this.faced.tilePositionX -= 2;
    if(!this.gameOver){
    if(game.settings.plyrCnt == 2){
    this.p2Rocket.update();
    }
    this.p1Rocket.update();
    this.ship01.update();
    this.ship02.update();
    this.ship03.update();
    }
    
    if (this.checkCollision(this.p1Rocket,this.ship03)){
        this.shipExplode(this.ship03); 
        this.p1Rocket.reset();
    }
    if(this.checkCollision(this.p1Rocket,this.ship02)){
        this.shipExplode(this.ship02);
        this.p1Rocket.reset();
    }
    if(this.checkCollision(this.p1Rocket, this.ship01)) {
        this.p1Rocket.reset();
        this.shipExplode(this.ship01);
    }
    if(game.settings.plyrCnt == 2){
    if (this.checkCollision(this.p2Rocket,this.ship03)){
        this.shipExplode(this.ship03); 
        this.p2Rocket.reset();
    }
    if(this.checkCollision(this.p2Rocket,this.ship02)){
        this.shipExplode(this.ship02);
        this.p2Rocket.reset();
    }
    if(this.checkCollision(this.p2Rocket, this.ship01)) {
        this.p2Rocket.reset();
        this.shipExplode(this.ship01);
    }
}
}

checkCollision(rocket,ship){ 
    if(rocket.x<ship.x + ship.width &&
        rocket.x + rocket.width>ship.x &&
        rocket.y < ship.y + ship.height &&
        rocket.height + rocket.y > ship.y ){
         return true;
        
        } else {
         return false;
        }
}



shipExplode(ship){
ship.alpha = 0;
let boom = this.add.sprite(ship.x,ship.y, 'explosion').setOrigin(0,0);
boom.anims.play('explode');
boom.on('animationcomplete',() => {
    ship.reset();
    ship.alpha = 1;
    boom.destroy();
});

this.p1Score +=ship.points;
this.scoreLeft.text = this.p1Score;
this.sound.play('sfx_explosion');
}

}


