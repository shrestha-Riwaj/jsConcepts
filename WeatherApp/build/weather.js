let api = "http://api.openweathermap.org/data/2.5/weather?q=";
let city
let key = "&APPID=001b0f58045147663b1ea518d34d88b4";

let inputbox = document.querySelector('#input-box');
let button = document.querySelector("#btn");

async function getWeather(e){
    

    

}

button.addEventListener('click', async(e)=>{
    e.preventDefault();
    console.log(inputbox.value);
    city = inputbox.value;
    let url = api + city.toLowerCase() + key;
    let place = document.querySelector('#placename');
    let mon = document.querySelector('#mon')
    let h2 = document.querySelector('.city');
    let month = document.querySelector('.month');

    let temp = document.querySelector('#temperature');
    let currentTemp = document.querySelector('.currentTemp');
    let desc = document.createElement('p');
    let weatherdesc = document.createElement('p');
    h2.innerHTML = '';
    month.innerHTML = '';
    currentTemp.innerHTML = '';
    desc.innerHTML = '';
    weatherdesc.innerHTML = '';
    try{

        const response = await fetch(url);
        if(!response.ok){
            throw new Error ("Error found");
        }
        const data = await response.json();
        console.log(data.main);
        let weather = data.main.temp;
        let clouds = data.clouds.all;
        let wind = data.wind.speed
        let description = data.weather[0].description;
        let weatherCond = '';

        if (description.includes('clear') || (clouds < 20 && windSpeed < 5)) {
            weatherCond = 'Sunny';
        } else if (description.includes('cloud') || clouds >= 50) {
            weatherCond = 'Cloudy';
        } else if (data.rain) {
            weatherCond = 'Rainy';
        } else if (windSpeed > 20) {
            weatherCond = 'Windy';
        } else {
            weatherCond = 'Weather condition not classified';
        }

        weatherdesc.innerHTML = weatherCond;

        h2.innerHTML = city;

        let tempC = weather - 273.15;
        currentTemp.innerHTML = tempC.toFixed(2) + ' ˚C';

        desc.innerHTML = `${data.weather[0].description}`;
        desc.style.textTransform = 'capitalize';
        const date = new Date();
        const monthName = date.toLocaleString('default', { month: 'long' });
        console.log(monthName); // Output: "September" if the current month is September

        month.innerHTML = date;
        // console.log(date);
        place.appendChild(h2);
        mon.appendChild(month);
        temp.appendChild(currentTemp);
        temp.appendChild(desc);
        temp.appendChild(weatherdesc);
        console.log("Ok");

    }
    catch(error){
        console.error(error);
    }
});
