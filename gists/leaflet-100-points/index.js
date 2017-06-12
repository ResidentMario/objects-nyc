let L = require('leaflet');

let [x, y] = [40.7128, -74.0059];
let map = L.map('mapid').setView([x, y], 13);
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd'
}).addTo(map);

// L.circle([40.7128, -74.0059], {radius: 200}).addTo(map);
L.circle([40.7128 - 0.03, -74.0059 - 0.08], {radius: 100}).addTo(map);

for (let n = 0; n < 100; n++) {
    L.circle([40.7128 + Math.random() * 0.06 - 0.03, -74.0059 + Math.random() * 0.16 - 0.08], {radius: 100}).addTo(map);
}