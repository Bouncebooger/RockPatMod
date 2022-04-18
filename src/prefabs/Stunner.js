class Stunner extends Phaser.GameObject.Sprite {
    constructor(scene,x,y,texture,frame){
        super(scene,x,y,texture,frame);
       scene.add.existing(this);
       this.moveSpeed = 6; 
       
    }
     update(){
                
        if ( this.y >= borderUISize * 3 + borderPadding){
            this.y -= this.moveSpeed;
        }
        if (this.y <= borderUISize * 3 + borderPadding){
            
            this.destroy();

        }
            
        
     }    
   
   }