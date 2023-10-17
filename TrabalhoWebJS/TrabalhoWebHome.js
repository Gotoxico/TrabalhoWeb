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

var EUA = [
    [-22.121265, -51.383400],
    [39.5, -100.5]
];

var polylineEUA = L.polyline(EUA, {color: 'red'}).addTo(map);

map.fitBounds(polylineEUA.getBounds());

var Belgium = [
  [-22.121265, -51.383400],
  [50.5, 4.7]
];

var polylineBelgium = L.polyline(Belgium, {color: 'red'}).addTo(map);

map.fitBounds(polylineBelgium.getBounds());

var Egypt = [
  [-22.121265, -51.383400],
  [26, 29.3]
];

var polylineEgypt = L.polyline(Egypt, {color: 'red'}).addTo(map);

map.fitBounds(polylineEgypt.getBounds());

var Indonesia = [
  [-22.121265, -51.383400],
  [-2.6, 117.9]
];

var polylineIndonesia = L.polyline(Indonesia, {color: 'red'}).addTo(map);

map.fitBounds(polylineIndonesia.getBounds());

var SaudiArabia = [
  [-22.121265, -51.383400],
  [25.4, 42.4]
];

var polylineSaudiArabia = L.polyline(SaudiArabia, {color: 'red'}).addTo(map);

map.fitBounds(polylineSaudiArabia.getBounds());

var Australia = [
  [-22.121265, -51.383400],
  [-25, 134]
];

var polylineAustralia = L.polyline(Australia, {color: 'red'}).addTo(map);

map.fitBounds(polylineAustralia.getBounds());

var Malaysia = [
  [-22.121265, -51.383400],
  [4.4, 102.3]
];

var polylineMalaysia = L.polyline(Malaysia, {color: 'red'}).addTo(map);

map.fitBounds(polylineMalaysia.getBounds());

var China = [
  [-22.121265, -51.383400],
  [34.7, 105]
];

var polylineChina = L.polyline(China, {color: 'red'}).addTo(map);

map.fitBounds(polylineChina.getBounds());

var India = [
  [-22.121265, -51.383400],
  [22.2, 78.7]
];

var polylineIndia = L.polyline(India, {color: 'red'}).addTo(map);

map.fitBounds(polylineIndia.getBounds());

var Turkey = [
  [-22.121265, -51.383400],
  [38.7, 35]
];

var polylineTurkey = L.polyline(Turkey, {color: 'red'}).addTo(map);

map.fitBounds(polylineTurkey.getBounds());

var Brazil = [
  [-22.121265, -51.383400],
  [-10.5, -53.1]
];

var polylineBrazil = L.polyline(Brazil, {color: 'red'}).addTo(map);

map.fitBounds(polylineBrazil.getBounds());

var Spain = [
  [-22.121265, -51.383400],
  [39.2, -4.8]
];

var polylineSpain = L.polyline(Spain, {color: 'red'}).addTo(map);

map.fitBounds(polylineSpain.getBounds());

var Guinea = [
  [-22.121265, -51.383400],
  [10.6, -10.7]
];

var polylineGuinea = L.polyline(Guinea, {color: 'red'}).addTo(map);

map.fitBounds(polylineGuinea.getBounds());

var Ukraine = [
  [-22.121265, -51.383400],
  [49.3, 31.3]
];

var polylineUkraine = L.polyline(Ukraine, {color: 'red'}).addTo(map);

map.fitBounds(polylineUkraine.getBounds());

var Morocco = [
  [-22.121265, -51.383400],
  [31, -7.3]
];

var polylineMorocco = L.polyline(Morocco, {color: 'red'}).addTo(map);

map.fitBounds(polylineMorocco.getBounds());

var Namibia = [
  [-22.121265, -51.383400],
  [-23.3, 17.3]
];

var polylineNamibia = L.polyline(Namibia, {color: 'red'}).addTo(map);

map.fitBounds(polylineNamibia.getBounds());

var Russia = [
  [-22.121265, -51.383400],
  [64.6, 97.8]
];

var polylineRussia = L.polyline(Russia, {color: 'red'}).addTo(map);

map.fitBounds(polylineRussia.getBounds());

var Iran = [
  [-22.121265, -51.383400],
  [32.5, 54.5]
];

var polylineIran = L.polyline(Iran, {color: 'red'}).addTo(map);

map.fitBounds(polylineIran.getBounds());

var Japan = [
  [-22.121265, -51.383400],
  [36.55, 139.25]
];

var polylineJapan = L.polyline(Japan, {color: 'red'}).addTo(map);

map.fitBounds(polylineJapan.getBounds());



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

