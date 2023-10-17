var map = L.map('map').setView([39, 34], 2);
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});osm.addTo(map);

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
});positron.addTo(map);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
});positronLabels.addTo(map);

var markerEUA = L.marker([39.5, -100.5]).addTo(map);
var markerBelgium = L.marker([50.5, 4.7]).addTo(map);
var markerEgypt = L.marker([26, 29.3]).addTo(map);
var markerIndonesia = L.marker([-2.6, 117.9]).addTo(map);
var markerSaudiArabia = L.marker([25.4, 42.4]).addTo(map);
var markerAustralia = L.marker([-25, 134]).addTo(map);
var markerMalaysia = L.marker([4.4, 102.3]).addTo(map);
var markerChina = L.marker([34.7, 105]).addTo(map);
var markerIndia = L.marker([22.2, 78.7]).addTo(map);
var markerTurkey = L.marker([38.7, 35]).addTo(map);
var markerBrazil = L.marker([-10.5, -53.1]).addTo(map);
var markerSpain = L.marker([39.2, -4.8]).addTo(map);
var markerGuinea = L.marker([10.6, -10.7]).addTo(map);
var markerUkraine = L.marker([49.3, 31.3]).addTo(map);
var markerMorocco = L.marker([31, -7.3]).addTo(map);
var markerNamibia = L.marker([-23.3, 17.3]).addTo(map);
var markerRussia = L.marker([64.6, 97.8]).addTo(map);
var markerIran = L.marker([32.5, 54.5]).addTo(map);
var markerJapan = L.marker([36.55, 139.25]).addTo(map);

var latlngs = [
    [-22, -51],
    [39.5, -100.5]
];

var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

map.fitBounds(polyline.getBounds());



let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

  });
});

L.control.locate().addTo(map);

