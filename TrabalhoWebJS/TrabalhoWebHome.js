//Criar mapa e colocar layers//
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

//Colocar linhas de rota//

markerEUA.on('click', function(e) { 
  var EUA = [
  [-22.121265, -51.383400],
  [39.5, -100.5]
];

let polylineEUA = L.polyline(EUA, {color: 'red'}).addTo(map);

map.fitBounds(polylineEUA.getBounds()); 
})

markerBelgium.on('click', function(e) {
  var Belgium = [
    [-22.121265, -51.383400],
    [50.5, 4.7]
  ];
  
  var polylineBelgium = L.polyline(Belgium, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineBelgium.getBounds());
})

markerEgypt.on('click', function(e){
  var Egypt = [
    [-22.121265, -51.383400],
    [26, 29.3]
  ];
  
  var polylineEgypt = L.polyline(Egypt, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineEgypt.getBounds());
})

markerIndonesia.on('click', function(e){
  var Indonesia = [
    [-22.121265, -51.383400],
    [-2.6, 117.9]
  ];
  
  var polylineIndonesia = L.polyline(Indonesia, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineIndonesia.getBounds());
})

markerSaudiArabia.on('click', function(e){
  var SaudiArabia = [
    [-22.121265, -51.383400],
    [25.4, 42.4]
  ];
  
  var polylineSaudiArabia = L.polyline(SaudiArabia, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineSaudiArabia.getBounds());
})

markerAustralia.on('click', function(e){
  var Australia = [
    [-22.121265, -51.383400],
    [-25, 134]
  ];
  
  var polylineAustralia = L.polyline(Australia, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineAustralia.getBounds());
})

markerMalaysia.on('click', function(e){
  var Malaysia = [
    [-22.121265, -51.383400],
    [4.4, 102.3]
  ];
  
  var polylineMalaysia = L.polyline(Malaysia, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineMalaysia.getBounds());
})

markerChina.on('click', function(e){
  var China = [
    [-22.121265, -51.383400],
    [34.7, 105]
  ];
  
  var polylineChina = L.polyline(China, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineChina.getBounds());
})

markerIndia.on('click', function(e){
  var India = [
    [-22.121265, -51.383400],
    [22.2, 78.7]
  ];
  
  var polylineIndia = L.polyline(India, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineIndia.getBounds());
})

markerTurkey.on('click', function(e){
  var Turkey = [
    [-22.121265, -51.383400],
    [38.7, 35]
  ];
  
  var polylineTurkey = L.polyline(Turkey, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineTurkey.getBounds());
})

markerBrazil.on('click', function(e){
  var Brazil = [
    [-22.121265, -51.383400],
    [-10.5, -53.1]
  ];
  
  var polylineBrazil = L.polyline(Brazil, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineBrazil.getBounds());
})

markerSpain.on('click', function(e){
  var Spain = [
    [-22.121265, -51.383400],
    [39.2, -4.8]
  ];
  
  var polylineSpain = L.polyline(Spain, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineSpain.getBounds());
})

markerGuinea.on('click', function(e){
  var Guinea = [
    [-22.121265, -51.383400],
    [10.6, -10.7]
  ];
  
  var polylineGuinea = L.polyline(Guinea, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineGuinea.getBounds());
})

markerUkraine.on('click', function(e){
  var Ukraine = [
    [-22.121265, -51.383400],
    [49.3, 31.3]
  ];
  
  var polylineUkraine = L.polyline(Ukraine, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineUkraine.getBounds());
})

markerMorocco.on('click', function(e){
  var Morocco = [
    [-22.121265, -51.383400],
    [31, -7.3]
  ];
  
  var polylineMorocco = L.polyline(Morocco, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineMorocco.getBounds());
})

markerNamibia.on('click', function(e){
  var Namibia = [
    [-22.121265, -51.383400],
    [-23.3, 17.3]
  ];
  
  var polylineNamibia = L.polyline(Namibia, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineNamibia.getBounds());
})

markerRussia.on('click', function(e){
  var Russia = [
    [-22.121265, -51.383400],
    [64.6, 97.8]
  ];
  
  var polylineRussia = L.polyline(Russia, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineRussia.getBounds());
})

markerIran.on('click', function(e){
  var Iran = [
    [-22.121265, -51.383400],
    [32.5, 54.5]
  ];
  
  var polylineIran = L.polyline(Iran, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineIran.getBounds());
})

markerJapan.on('click', function(e){
  var Japan = [
    [-22.121265, -51.383400],
    [36.55, 139.25]
  ];
  
  var polylineJapan = L.polyline(Japan, {color: 'red'}).addTo(map);
  
  map.fitBounds(polylineJapan.getBounds());
})

//Botão no mapa para localização user//
L.control.locate().addTo(map);
