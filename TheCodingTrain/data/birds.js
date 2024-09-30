var data;
function preload(){
    data = loadJSON("birds.json");
}

function setup(){
    // noCanvas();
    createCanvas(400,400);
    // data = loadJSON("birds.json");
    createP(data.birds[1].members[2]);
    var birds = data.birds;
    // for(var i =0; i<birds.length;i++){
    //     createElement('h1',birds[i].family);
    //     var members = birds[i].members;
    //     createDiv(members);
    // }
}

function draw(){

    background(0);
    stroke(255);
    strokeWeight(10);
    text(data.birds[1].members[2], 40,20);
}