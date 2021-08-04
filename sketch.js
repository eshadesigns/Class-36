var playerCount, gameState, database, backgroundImg;
var form, player, game;
var allPlayers = [];

function setup(){
database=firebase.database();
gameState=0;
game=new Game();
game.getState();
game.start();
createCanvas(800, 400);
}

function draw(){
    background("blue");
    if(playerCount===3){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
}
 