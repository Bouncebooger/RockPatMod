//Daniel Wild
// Project name: AGAIN AND AGAIN AND AGAIN AND AGAIN
// 4/18/2022
// ~10
// point breakdown
// S(hrek)
// Game artwork redesign( changed from sci-fi to @!&^&&*^!)
// Simultaneous 2 player mode
// Parralax scrolling (since there wasn't any parralax in the 
// base game, It should be counted as seperate from the graphics
// rehaul)
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
let keyDOWN,keyUP,keyLEFT,keyRIGHT;
let player;
let keyW,keyS,keyD,keyA,keyR;
