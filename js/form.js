class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3"); 
        this.resetButton = createButton("Reset")
    }
    
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}


    display(){
         
        this.title.html("Multiplayer Racing");
        this.title.position(displayWidth/2,0);
        
        this.input.position(displayWidth/2-40,displayHeight/2);
        this.button.position(displayWidth/2+50,displayHeight/2+50);

        this.resetButton.position(100, 100);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+ player.name);
            this.greeting.position(displayWidth/2,displayHeight/4);
        })
        
        this.resetButton.mousePressed(()=>{
            player.updateCount(0)
            game.update(0);

        })
    }
}