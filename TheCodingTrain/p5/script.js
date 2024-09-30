let circleX = 150;
let x = 100;
let y= 100;

function setup(){
    createCanvas(400,400);
    background(222);
}

function draw(){
    // background(220);
    rectMode(CENTER);
    fill(255,0,0)
    stroke(0,255,0)
    ellipse(circleX, 140, x,y);
    x+=4;
    y+=2;
    // circleX += (-0.2);
    // line(100,100,20,45);
    // point(55,34)
    // triangle(100,120,40,50,45,44,)
    // fill(0,0,255,134);
    // stroke(255)
    // strokeWeight(10);
    // noStroke();
    // ellipse(120,160,50,50)
}

function mousePressed(){
    background(0);
    // circleX = 0
    x=0;
    y=0;
}