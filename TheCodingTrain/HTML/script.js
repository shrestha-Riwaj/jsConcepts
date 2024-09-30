var x = 10;
var y =200;
var h1;

function setup(){
    var canvas = createCanvas(300, 300);
    let button = createButton("Generate Number");
    button.mousePressed(()=>{
        createP(`Generating a random number ${random(0,10)
        }`,
        h1.html("Genreating a random Number Below"));
    });
    h1 = createElement('h1',`Waiting ${x}`);
    canvas.position(500,300);
}

function draw(){
    background(0);
    fill(255, 0, 255);
    rect(x, y, 50, 50);
    h1.position(x,y);
    x += random(-5,6)
    // rect(10,200,40,40);
    // square(400,340,20,45);
    // rect(400,340,20,45);

}