let mapId = document.querySelector('#map');
let map = L.map(mapId);
map.setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/#map=3/8.75/91.41">OpenStreet</a>'
}).addTo(map); 

navigator.geolocation.watchPosition(success, error);

function success(pos){
    const lat = pos.coords.latitude;
    const long = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;

    L.marker([lat, long]).addTo(map);
    L.circle([lat, long], {radius:accuracy}).addTo(map);

    map.fitBounds(circle.getBounds());
}

function error(err){
    if(err.code === 1){
        alert("location access allow")
    }
    else{
        alert("Error")
    }
}