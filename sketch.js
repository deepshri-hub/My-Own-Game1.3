const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ballImg;
var log1,log2,log3,lo4,log5,log6;
var log1Img,log2Img,log3Img,lo4Img,log5Img,log6Img;
var score = 0;
var backgroundImg;
var ground;

function preload() {
    backgroundImg = loadImage("sprites/Backgroung.jpg");

    log1Img = loadImage("sprites/log1.png");
    log2Img = loadImage("sprites/log2.png");

    //ball = loadImage("sprites/Ball.png");
}

function setup(){
    var canvas = createCanvas(displayWidth-450,1200);
    engine = Engine.create();
    world = engine.world;

    log1 = createSprite(750,400,50,50);
    log1.addImage(log1Img);
    log1.scale=1.2;

    log2 = createSprite(170,200,50,50);
    log2.addImage(log2Img);
    log2.scale=1.2;

    log3 = createSprite(750,700,50,50);
    log3.addImage(log1Img);
    log3.scale=1.2;

    log4 = createSprite(170,550,50,50);
    log4.addImage(log2Img);
    log4.scale=1.2;

    log5 = createSprite(750,1000,50,50);
    log5.addImage(log1Img);
    log5.scale=1.2;

    log6 = createSprite(170,850,50,50);;
    log6.addImage(log2Img);
    log6.scale=1.2;

   // ball = createSprite(700,400);
   // ball.addImage(ballImg);

    ground = new Ground(5,1200,displayWidth*2,10);
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, 600, 50)
    
    Engine.update(engine);
   
    //log1.display();
    //log2.display();
    //log3.display();
    //log4.display();
    //log5.display();
    //log6.display();
    //ball.display();

    ground.display();

    drawSprites();
}
