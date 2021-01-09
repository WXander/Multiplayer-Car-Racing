class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    start(){
        if (gameState === 0){
            player = new Player();
            player.getCount()
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200);
        car1.addImage(carImg1);
        car2 = createSprite(300, 200);
        car2.addImage(carImg2);
        car3 = createSprite(500, 200);
        car3.addImage(carImg3);
        car4 = createSprite(700, 200);
        car4.addImage(carImg4);
        cars = [car1, car2, car3, car4];
    }
    
    play(){
        form.hide();
        textSize(30)
        text("Game Start" ,120,100);
        Player.getPlayerInfo();
        if (allPlayers !== undefined){
           // var displayPosition = 130;
           
         background(ground);
         image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5);
           
           var index = 0;
            var x = 150;
            var y;

            for(var plr in allPlayers){
                index += 1;
                x += 200;
                y = displayHeight-allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if (index === player.index){
                    fill("green")
                    ellipse(x, y, 120, 120);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }

                
                //displayPosition += 20;
                //textSize(15);
                //text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,displayPosition);
            }

            if(keyIsDown(UP_ARROW) && player.index !== null){
                player.distance +=50
                player.update();
              }

              if (player,distance > 4050){
                  gameState = 2;
              }
              drawSprites();
        }
      
        
    }

    end(){
        console.log("Game Ended");


    }
}