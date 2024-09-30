var weatherData;

var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var city;
var key = "&APPID=001b0f58045147663b1ea518d34d88b4";

let url = api+city+key

var input;

// var input = document.querySelector('#city');
// var contain = document.querySelector("#container");

// input.addEventListener('keyup', ()=>{
//     var text = document.createElement('p');
//     text.innerHTML = input.value;
//     console.log(text);

//     contain.appendChild(text);
// })

// function setup(){

//     createCanvas(400,400);
//     var button = select("#submit");
//     button.mousePressed(weatherAsk);
//     input = select("#city");
// }

// function weatherAsk(){

//     city = input.value();
//     var url = api + city + key;
//     console.log("url: " , city);
//     loadJSON(url, getData);
// }


// function getData(data){
//     weatherData = data;
//     console.log(data.weather[0].main);
//     createP(weatherData.main.temp_min);
// }

// function draw(){
//     background(0);
//     fill(255);
//     stroke(230);
//     strokeWeight(10);
//     // text(weatherData.weather[0].main, 100,120);
//     if(weatherData){
//         var temp = weatherData.main.temp;
//         var humidity = weatherData.main.humidity;
//         ellipse(100,150, (temp-100), temp-100);
//         ellipse(350,250, humidity, humidity);

//     }
    
// }