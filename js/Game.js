class Game{
    constructor(){
   
    }
    getState(){
    var gref = database.ref("gameState");
    gref.on("value", function (data){
        gameState=data.val();
    });
    }
    update(state){
     database.ref('/').update({
         gameState: state
     }) 
    }
    async start(){
    if(gameState===0){
        player=new Player();
        var playerRef = await database.ref("playerCount").once("value");
        if(playerRef.exists()){
            playerCount = playerRef.val();
            player.getCount();
        }
        form=new Form();
        form.display();
    }
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            var pos = 100;
            for(var plr in allPlayers){
                if(plr==="player" + player.index){
                  fill("red");
                }
                else{
                    fill("black");
                }
                textSize(20);
               text(allPlayers[plr].name+" : " + allPlayers[plr].distance, 100, pos);
               pos+=50;
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!=null){
            player.distance+=10;
            player.update();
        }
    }
}