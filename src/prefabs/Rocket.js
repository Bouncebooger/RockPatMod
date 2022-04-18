class Rocket extends Phaser.GameObjects.Sprite {
constructor(scene,x,y,texture,frame,player){
    super(scene,x,y,texture,frame,player);
    //console.log(player, "fucking hell");
    scene.add.existing(this);
    this.isFiring = false;
    this.isFiring2 = false;
    this.isStun = false;
    this.sfxRocket = scene.sound.add('sfx_rocket');
    this.moveSpeed = 2;
    this.pllly = player;
   // p1shots;
}
update(){
    //console.log(this.pllly, "player");
 if(this.pllly == 'p2'){
     console.log(this.x);
         if(!this.isFiring2){
        if(keyA.isDown && this.x >= borderUISize + this.width){
            this.x -= this.moveSpeed;
        } else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width){
            this.x += this.moveSpeed;
        }
    }
    
    
    
    if( Phaser.Input.Keyboard.JustDown(keyW)){
        this.sfxRocket.play();
       
        this.isFiring2 = true;
        
    }
    if (Phaser.Input.Keyboard.JustDown(keyS)){
        this.sfxRocket.play();
        this.isStun = true;
    }
    
    if (this.isFiring2 && this.y >= borderUISize * 3 + borderPadding){
        this.y -= this.moveSpeed;
    }
    if (this.y <= borderUISize * 3 + borderPadding){
        this.isFiring2 = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
      
 }   
    if(this.pllly == 'p1'){
       // console.log(this.y,"p1");
if(!this.isFiring){
    if(keyLEFT.isDown && this.x >= borderUISize + this.width){
        this.x -= this.moveSpeed;
    } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
        this.x += this.moveSpeed;
    }
}



if( Phaser.Input.Keyboard.JustDown(keyUP)){
    this.sfxRocket.play();
    this.isFiring = true;

}
if (Phaser.Input.Keyboard.JustDown(keyDOWN)){
    this.sfxRocket.play();
    this.isStun = true;
    
    
}
    
if (this.isFiring && this.y >= borderUISize * 3 + borderPadding){
    this.y -= this.moveSpeed;
}
if (this.y <= borderUISize * 3 + borderPadding){
    this.isFiring = false;
    this.y = game.config.height - borderUISize - borderPadding;
}
    
  
    }
//if(Phaser.Input.Keyboard.JustDown(keyG)){

//}


    
}

reset(){
  this.isFiring2= false;
  this.isFiring = false;
  this.isStun = false;
  this.y = game.config.height - borderUISize - borderPadding;

}


}