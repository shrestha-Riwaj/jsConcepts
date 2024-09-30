let api = "http://api.openweathermap.org/data/2.5/weather?q=";
let city
let key = "&APPID=dffeac8557b99b53ffccb428f508b872";

// let url = api + city + key;

// let input = document.querySelector('#weather');
// let btn = document.querySelector('#btn');


// (e)=>{
//     e.preventDefault();
//     console.log(e.type);
//     let text = document.createElement('p');
//     text.className = "para";
//     text.textContent = input.value;
//     loadJSON(url);
//     div.appendChild(text);
//     console.log(url);
// }

// let div = document.querySelector('.container');

// const fetchWeather = async (e)=>{

//     let url = api + input.value.toLowerCase() + key;
//     try{

//         const response = await fetch(url);
//         if(!response.ok){
//             throw new Error("Couldn't fetch the data");
//         }
//         const data = await response.json();
//         console.log(data.main.temp);
//         let temp = data.main.temp;
//         let tempC = temp - 273.15;
//         let text = document.createElement('p');
//         text.textContent = `Temperature: ${tempC.toFixed(2)}°C`;
//         ;


//         let div = document.querySelector('.container')
//         div.appendChild(text);
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// btn.addEventListener('click', fetchWeather);


let input = document.querySelector('#weather');
let btn = document.querySelector('#btn');

const getWeather = async ()=>{
    
    let url = api+input.value+key;
    let p = document.createElement('p');
    city = input.value;
    try{
        let div = document.querySelector('.container')
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Can't fetch the data");
        }
        const data = await response.json();
        tempk = data.main.temp;
        tempC = tempk - 273.15;
        p.className = "para";
        p.textContent = `The weather in ${city} is ${tempC.toFixed(2)}˚C`;

        div.appendChild(p);
    }
    catch(error){
        console.error(error);
    }
}

btn.addEventListener('click', getWeather);
