var canvas;
var music;
var base1,base2,base3,base4;
var ball;

function preload(){


  //  music = loadSound("music.mp3");


}


function setup(){
    canvas = createCanvas(800,600);
    

    //create 4 different surfaces
base1=createSprite(100,580,150,20);
base1.shapeColor=rgb(80,23,200);
base2=createSprite(300,580,150,20);
base2.shapeColor="Red";
base3=createSprite(500,580,150,20);
base3.shapeColor="Magenta";
base4=createSprite(700,580,150,20);
base4.shapeColor="Lime";

//create ball sprite and give velocity
ball=createSprite(300,50,20,20);
ball.shapeColor="grey";
ball.velocityX=4;
ball.velocityY=-4;
    

}

function draw() {
    background("green")




 //add condition to check if box touching surface and make it box

if(base1.isTouching(ball)&&ball.bounceOff(base1)) {
    ball.shapeColor=rgb(80,23,200);
}

if(base2.isTouching(ball)&&ball.bounceOff(base2)) {
    ball.shapeColor="Red";
}
    if(base3.isTouching(ball)&&ball.bounceOff(base3)) {
        ball.shapeColor="Magenta";
    }

    if(base4.isTouching(ball)&&ball.bounceOff(base4)) {
        ball.shapeColor="Lime";
    }
   edges=createEdgeSprites()
   ball.bounceOff(edges);
    

    drawSprites();
   
}
