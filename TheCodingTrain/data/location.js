var url = "http://api.open-notify.org/iss-now.json";
var issX=0;
var issY=0;

function setup(){

    createCanvas(400,400);
    // loadJSON(url, getData);
    setInterval(askISS, 1000);
}

function getData(data){
    createP(data.iss_position.longitude);
    let long = data.iss_position.longitude;
    let lat = data.iss_position.latitude;
    issX = map(lat, 50, 55, 0, width);
    issY = map(long, -55,-50, 0, height);
}

function askISS(){
    loadJSON(url, getData, 'jsonp');
}

function draw(){
    background(0);
    fill(255);
    stroke(145);
    strokeWeight(8);
    ellipse(issX, issY, 20,20)
}