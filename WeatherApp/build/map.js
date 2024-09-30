let map;
let markers = [
    {
        coordinates: { lat: 53.46283320275885, lng: -2.248211115991157 },
        iconImage: 'https://img.icons8.com/fluent/48/000000/marker-storm.png',
        content: '<h4>Hulme</h4>'
    },
    {
        coordinates: { lat: 53.463842391942, lng: -2.247733682839402 }
    }
];

function initMap() {
    const options = {
        zoom: 16,
        center: { lat: 53.46312701980667, lng: -2.2472026054971903 }
    };

    map = new google.maps.Map(document.getElementById('map'), options);

    google.maps.event.addListener(map, 'click', function (event) {
        addMarker({
            coordinates: event.latLng
        });
    });

    markers.forEach(markerData => addMarker(markerData));

    drawDirection();
}

function addMarker(prop) {
    let marker = new google.maps.marker.AdvancedMarkerElement({
        position: prop.coordinates,
        map: map
    });

    if (prop.iconImage) {
        marker.setIcon(prop.iconImage);
    }

    if (prop.content) {
        let infoWindow = new google.maps.InfoWindow({
            content: prop.content
        });

        marker.addListener("click", function () {
            infoWindow.open(map, marker);
        });
    }
}

function drawDirection() {
    const directionService = new google.maps.DirectionsService();
    const directionRenderer = new google.maps.DirectionsRenderer();

    directionRenderer.setMap(map);

    calculationAndDisplayRoute(directionService, directionRenderer);
}

function calculationAndDisplayRoute(directionService, directionRenderer) {
    const start = { lat: 53.46279485096965, lng: -2.2514995069397745 };
    const end = { lat: 53.46344635618052, lng: -2.249321553337068 };
    const request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionService.route(request, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionRenderer.setDirections(response);
            let route = response.routes[0];
            let directionsHtml = '';
            route.legs[0].steps.forEach(step => {
                directionsHtml += step.instructions + "<br />";
            });
            document.getElementById('directions').innerHTML = directionsHtml;
        } else {
            console.error('Directions request failed due to ' + status);
        }
    });
}
