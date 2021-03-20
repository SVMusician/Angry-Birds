const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var sling;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight - 110);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(displayWidth/2,height,displayWidth,20);
    platform = new Ground(150, displayHeight-205, 600, 170);

    box1 = new Box(700,displayHeight-160,70,70);
    box2 = new Box(920,displayHeight-160,70,70);
    pig1 = new Pig(810, displayHeight-160);
    log1 = new Log(810,displayHeight-200,300, PI/2);

    box3 = new Box(700,displayHeight-240,70,70);
    box4 = new Box(920,displayHeight-240,70,70);
    pig3 = new Pig(810, displayHeight-240);

    log3 =  new Log(810,displayHeight-265,300, PI/2);

    box5 = new Box(810,displayHeight-275,70,70);
    log4 = new Log(760,displayHeight-380,150, PI/7);
    log5 = new Log(870,displayHeight-380,150, -PI/7);

    bird = new Bird(100,640);
    sling = new Sling(bird.body,{x:100,y:640});

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    sling.display();
    platform.display();
}
    function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
    function mouseReleased(){
        sling.fly();
    }
