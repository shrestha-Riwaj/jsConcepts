functiongetWeather(){
    const apiKey = "";
    const city = document.getElementById('city').ariaValueMax;

    if(!city){
        alert("Enter a city");
        return;
    }

    const currentWeatherUrl = "";
    const forecaseUrl = "";
    fetch (currentWeatherUrl).then(response=>response.json())
    ,then(data =>{
        displayweather(data);
    })
    .catch(error =>{
        
    })
}