var canvas;
var movingRect, fixedRect1, fixedRect2, fixedRect3, fixedRect4;


function setup(){
 createCanvas(400,400);
   
 
    movingRect = createSprite(200, 200, 30, 30);
    movingRect.shapeColor="white";
    fixedRect1 = createSprite(70, 380, 70, 20);
    fixedRect1.shapeColor="purple";
    fixedRect2 = createSprite(160, 380, 70, 20);
    fixedRect2.shapeColor="blue";
    fixedRect3 = createSprite(250, 380, 70, 20);
    fixedRect3.shapeColor="green";
    fixedRect4 = createSprite(330, 380, 70, 20);
    fixedRect4.shapeColor="yellow"
    movingRect.velocityX=4;
    movingRect.velocityY=4;
}

function draw() {
    background("red");
    var Edges = createEdgeSprites();
    
    if(movingRect.isTouching(fixedRect4)){
        movingRect.shapeColor = "yellow";
        fixedRect4.shapeColor = "yellow"
    }
    if(movingRect.isTouching(fixedRect1)){
        movingRect.shapeColor="purple";
        fixedRect1.shapeColor="purple";
    }

    if(movingRect.isTouching(fixedRect2)){
        movingRect.shapeColor="blue";
        fixedRect2.shapeColor="blue";
    }

    if(movingRect.isTouching(fixedRect3)){
        movingRect.shapeColor="green";
        fixedRect3.shapeColor="green";
    }

    movingRect.bounceOff(fixedRect1);
    movingRect.bounceOff(fixedRect2);
    movingRect.bounceOff(fixedRect3);
    movingRect.bounceOff(fixedRect4);
    movingRect.bounceOff(Edges);


   
   drawSprites();
}

