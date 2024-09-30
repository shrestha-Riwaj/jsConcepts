const geocodeApi = "https://api.openweathermap.org/data/2.5/weather?q=";
const historicalApi = "https://history.openweathermap.org/data/2.5/history/city";
const key = "&appid=dffeac8557b99b53ffccb428f508b872";
const inputbox = document.querySelector('#input-box');
const button = document.querySelector("#btn");

async function getWeather(e) {
    e.preventDefault();
    const city = inputbox.value;

    try {
        // Step 1: Get coordinates for the city
        const coords = await getCoordinates(city);

        // Get the current date and calculate the start and end timestamps for yesterday
        const now = new Date();
        const endTimestamp = Math.floor(now.getTime() / 1000); // Current time in UNIX timestamp
        const start = new Date();
        start.setDate(start.getDate() - 1); // Go back one day
        const startTimestamp = Math.floor(start.getTime() / 1000); // Start time in UNIX timestamp

        // Step 2: Fetch historical weather data for yesterday
        const url = `${historicalApi}?lat=${coords.lat}&lon=${coords.lon}&type=hour&start=${startTimestamp}&end=${endTimestamp}${key}`;

        let place = document.querySelector('#placename');
        let mon = document.querySelector('#mon');
        let h2 = document.querySelector('.city');
        let month = document.querySelector('.month');

        let temp = document.querySelector('#temperature');
        let currentTemp = document.querySelector('.currentTemp');
        let desc = document.createElement('p');
        let weatherdesc = document.createElement('p');

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error fetching historical weather data");
        }
        const data = await response.json();
        console.log(data);

        // Process the historical data
        const hourlyData = data.list;
        const latestData = hourlyData[hourlyData.length - 1]; // Get the most recent hour's data
        const latestTempForYesterday = latestData.main.temp;
        const weatherDescription = latestData.weather[0].description;
        const clouds = latestData.clouds.all;
        const windSpeed = latestData.wind.speed;

        // Determine weather condition
        let weatherCond = '';
        if (weatherDescription.includes('clear') || (clouds < 20 && windSpeed < 5)) {
            weatherCond = 'Sunny';
        } else if (weatherDescription.includes('cloud') || clouds >= 50) {
            weatherCond = 'Cloudy';
        } else if (latestData.rain) {
            weatherCond = 'Rainy';
        } else if (windSpeed > 20) {
            weatherCond = 'Windy';
        } else {
            weatherCond = 'Weather condition not classified';
        }

        // Display data
        weatherdesc.innerHTML = weatherCond;
        h2.innerHTML = city;
        currentTemp.innerHTML = `Temperature: ${latestTempForYesterday.toFixed(2)}°C`;
        desc.innerHTML = `Description: ${weatherDescription}`;
        desc.style.textTransform = 'capitalize';
        
        const date = new Date();
        const monthName = date.toLocaleString('default', { month: 'long' });
        month.innerHTML = monthName;

        place.appendChild(h2);
        mon.appendChild(month);
        temp.appendChild(currentTemp);
        temp.appendChild(desc);
        temp.appendChild(weatherdesc);

        console.log("Ok");
    } catch (error) {
        console.error(error);
    }
}

button.addEventListener('click', getWeather);

// Function to get coordinates from city name
async function getCoordinates(city) {
    const url = `${geocodeApi}${city}&${key}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Error fetching coordinates");
    }
    const data = await response.json();
    return {
        lat: data.coord.lat,
        lon: data.coord.lon
    };
}
