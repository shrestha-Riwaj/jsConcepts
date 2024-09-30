
var flower;

function preload(){
    flower=loadJSON("flower.json")
}

function setup(){
    createCanvas(400, 400);
    //  flower = {
    //     type:"sunflower",
    //     col:color(200,220,0),
    // }
    // flower = loadJSON("flower.json");
    // this works but use preload
}

function draw(){
    background(20);
    fill(flower.r, flower.g, flower.b);
    text(flower.type, 10, 20);
    // rect(20,20,20,40);
}