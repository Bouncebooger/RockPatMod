let config = {
  type: Phaser.CANVAS,
   width: 640,
height: 480,
scene: [Menu,Play]
}
let game = new Phaser.Game(config);
//let keyF,keyR,keyLEFT,keyRIGHT;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize /3 ;
let keyF,keyR,keyLEFT,keyRIGHT;
//two player
//weapons

//extra ship
//shrapenel
// parallax scrolling