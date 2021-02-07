// This example displays a map with the language set to Arabic and the
// regions set to Egypt. These settings are specified in the HTML script
// element when loading the Google Maps JavaScript API.
// Setting the language shows the map in the language of your choice.
// Setting the region biases the geocoding results to that region.
// In addition, the page's html element sets the text direction to
// right-to-left.
/*
function initMapZuCerkev() {
    const cairo = { lat:46.258418712396846, lng: 14.602309977679845 };
    const map = new google.maps.Map(document.getElementById("map"), {
        scaleControl: true,
        center: cairo,
        zoom: 18,
    });
    const infowindow = new google.maps.InfoWindow();
    infowindow.setContent("<b>Zupnijska cerkev sv Benedikta</b>");
    const marker = new google.maps.Marker({ map, position: cairo });
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
}*/

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat:46.265060835616865, lng: 14.557460424856902 },
    });
    const bounds = {
        //46.27702940162786, 14.561681697258631
        //46.25309724753283, 14.616319439316628
        north: 46.27702940162786,
        south: 46.25309724753283,
        east: 14.616319439316628,
        west: 14.561681697258631,
    };
    // Display the area between the location southWest and northEast.
    map.fitBounds(bounds);
    // Add 5 markers to map at random locations.
    // For each of these markers, give them a title with their index, and when
    // they are clicked they should open an infowindow with text from a secret
    // message.
    const secretMessages = ["Zupnijska cerkev sv. Benedikta v Stranjah", "Podruznicna cerkev sv. Lenarta", "Novomasnikov dom na Okroglem"];
    const latitudes = [46.25837559737497, 46.27242865908371, 46.27233197391363];
    const longetudes = [14.602327200438586, 14.568181775512828, 14.58697065763598];

    for (let i = 0; i < secretMessages.length; ++i) {
        const marker = new google.maps.Marker({
            position: {
                lat: latitudes[i],
                lng: longetudes[i],
            },
            map: map,
        });
        attachSecretMessage(marker, secretMessages[i]);
    }
}

// Attaches an info window to a marker with the provided message. When the
// marker is clicked, the info window will open with the secret message.
function attachSecretMessage(marker, secretMessage) {
    const infowindow = new google.maps.InfoWindow({
        content: secretMessage,
    });
    marker.addListener("click", () => {
        infowindow.open(marker.get("map"), marker);
    });
}
