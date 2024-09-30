var spaceData;
var x = 0;

function setup(){

    createCanvas(300,200);
    
    loadJSON("http://api.open-notify.org/astros.json", gotData);


}

function gotData(data){
    // console.log(data.people[1].name);
    // background(0);
    // for(var i =4;i<data.number;i++ ){
    //     fill(244);
    //     ellipse(random(width), random(height),20,20);
    // }
    
    spaceData = data;
}

function draw(){
    background(20);
    stroke(230);
    rect(20,20, 23,23);
    fill(220);
    // let a = createP(spaceData.people[i].name);
    if(spaceData){
        randomSeed(4);
        let x = 10;
        let y=20;
        for(let i =0;i<spaceData.number;i++ ){
            fill(244);
            ellipse(random(width), random(height),40,30);
            text(spaceData.people[i].name, x,y);
            x+=20;
            y+=50;
            
        }
    }
    
    line(x,0,x,height);
    x += 5;
    if(x>width){
        x=0;
    }
    // for(let i =0;i<spaceData.number;i++ ){
    //     fill(244);
    //     ellipse(random(width), random(height),40,30);
    // }
}