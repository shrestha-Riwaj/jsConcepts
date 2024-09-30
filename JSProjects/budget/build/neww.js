const apiURL = 'https://www.metaweather.com/api/';

async function getWeather(location){
    const response = await fetch(apiURL + '/location/search/?q='+location);
    const data = await response.json();

    console.log(data);
}

getWeather('London');