class schrap extends Phaser.GameObject.Sprite {
 constructor(scene,x,y,texture,frame){
     super(scene,x,y,texture,frame);
    scene.add.existing(this);
    this.moveSpeed = 4; 
    
 }
  update(){
             
  }    

}