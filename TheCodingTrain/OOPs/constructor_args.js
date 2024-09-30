class Bubble{

    constructor(){
        this.x=10;
        this.y=9;
    }

    show(){
        stroke(255);
        strokeWeight(10);
        // background(0);
        ellipse(this.x, this.y,20, 20);
    }

    move(){
        this.x += random(-5,6,);
        this.y += random(-5,6,);
    }
}

let bubble1;
let bubble2;

function setup(){
    createCanvas(500, 300);
    background(0);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
}

function draw(){
    background(0);
    bubble1.show();
    bubble1.move();
    bubble2.show();
    bubble2.move();
}