// initialize the map
var map = L.map('map').setView([-25.274399, 133.775131], 5);

// load a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 10,
    minZoom: 5
}).addTo(map);

// Creating map points dynamically from list
i = 0
while (i < stationList.length) {
    var n = stationList[i].id;
    L.marker([(stationList[i].lat), (stationList[i].lon)]).addTo(map)
        .bindPopup((stationList[i].name) + '<br> Station:' + (stationList[i].id) + `<br> <button type="button" onclick="myFunction(${n})">Select this Location</button>`)
    i++
}