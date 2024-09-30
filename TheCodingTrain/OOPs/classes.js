// let bubble1;
// let bubble2;

// function setup (){
//     createCanvas(600,200);
//     bubble1 = new Bubble();
//     bubble2 = new Bubble();
// }

// function draw(){
//     background(0);
//     bubble1.move();
//     bubble1.show();
//     bubble2.move();
//     bubble2.show();
// };

// class Bubble{
//     constructor (){
//         this.x = 200;
//         this.y = 100;
//     }

//     move(){
//         this.x += random(-5, 5);
//         this.y += random(-5, 5);
//     }

//     show(){
//         stroke(255);
//         strokeWeight(8);
//         noFill();
//         ellipse(this.x, this.y, 20,20);
//     }
// }


let bubble1;
let bubble2;
function setup(){
    createCanvas(600, 300);
    background(0);
    bubble1 = new Bubble();
    bubble2 = new Bubble();

}

class Bubble{
    constructor(){
        this.x = 100;
        this.y = 200;
    }

    // constructor(x,y){
    //     this.x = x;
    //     this.y = y;
    // }

    show(){
        stroke(255);
        strokeWeight(10);
        ellipse(this.x, this.y, 100,100);
    }

    move(){
        this.x += random(-5,6);
        this.y += random(-5,6);
    }
}

function draw(){
    background(0);
    bubble1.show();
    bubble1.move();
    bubble2.show();
    bubble2.move();
}