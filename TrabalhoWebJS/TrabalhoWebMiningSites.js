var map = L.map('mapAreiaSilica').setView([39, 34], 2);
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
var markerMalaysia = L.marker([4.4, 102.3]).addTo(map);



var map1 = L.map('mapQuartzo').setView([39, 34], 2);
map1.createPane('labels');
map1.getPane('labels').style.zIndex = 650;
map1.getPane('labels').style.pointerEvents = 'none';

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});osm.addTo(map1);

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
});positron.addTo(map1);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
});positronLabels.addTo(map1);

var markerEUA = L.marker([39.5, -100.5]).addTo(map1);
var markerChina = L.marker([34.7, 105]).addTo(map1);
var markerIndia = L.marker([22.2, 78.7]).addTo(map1);
var markerTurkey = L.marker([38.7, 35]).addTo(map1);
var markerBrazil = L.marker([-10.5, -53.1]).addTo(map1);
var markerSpain = L.marker([39.2, -4.8]).addTo(map1);



var map2 = L.map('mapBauxita').setView([39, 34], 2);
map2.createPane('labels');
map2.getPane('labels').style.zIndex = 650;
map2.getPane('labels').style.pointerEvents = 'none';

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});osm.addTo(map2);

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
});positron.addTo(map2);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
});positronLabels.addTo(map2);

var markerChina = L.marker([34.7, 105]).addTo(map2);
var markerIndia = L.marker([22.2, 78.7]).addTo(map2);
var markerAustralia = L.marker([-25, 134.8]).addTo(map2);
var markerBrazil = L.marker([-10.5, -53.1]).addTo(map2);
var markerGuinea = L.marker([10.6, -10.7]).addTo(map2);
var markerUkraine = L.marker([49.3, 31.3]).addTo(map2);




var map3 = L.map('mapArsenopirita').setView([39, 34], 2);
map3.createPane('labels');
map3.getPane('labels').style.zIndex = 650;
map3.getPane('labels').style.pointerEvents = 'none';

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});osm.addTo(map3);

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
});positron.addTo(map3);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
});positronLabels.addTo(map3);

var markerChina = L.marker([34.7, 105]).addTo(map3);
var markerMorocco = L.marker([31, -7.3]).addTo(map3);
var markerNamibia = L.marker([-23.3, 17.3]).addTo(map3);
var markerRussia = L.marker([64.6, 97.8]).addTo(map3);
var markerIran = L.marker([32.5, 54.5]).addTo(map3);
var markerJapan = L.marker([36.55, 139.25]).addTo(map3);
var markerBelgium = L.marker([50.5, 4.7]).addTo(map3);
