let input = document.querySelector('.city');
let btn = document.querySelector('.btn');
let link =  "http://api.openweathermap.org/data/2.5/weather?q=";
let key = "&APPID=001b0f58045147663b1ea518d34d88b4";

btn.addEventListener('click', async(e)=>{

    e.preventDefault();
    let url = link + input.value + key;
    let h1 = document.querySelector('.cityDisplay');
    let p = document.querySelector('.tempDisplay');
    try{

        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Can't fetch the data");
        }

        const data = response.json();
        h1.textContent = input.value;
        console.log(data);
        tempk = data.main.temp;
        tempC = tempk - 273.15;
        p.className = "para";
        p.textContent = `The weather in ${city} is ${tempC.toFixed(2)}˚C`;

        div.appendChild(p);

    }
    catch(error){
        console.error(error);
    }
});