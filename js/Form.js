class Form{
    constructor(){
        this.title  = createElement("h1");
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h2");

    }
    display(){
        this.title.html("car racing game");
        this.title.position(350, 100);
        this.input.position(400, 200);
        this.button.position(450, 230);
        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.pname = this.input.value();
        playerCount+=1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("hello " + player.pname);
        this.greeting.position(200, 260);
        })
    }
    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }
}