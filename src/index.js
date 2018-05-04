const { markerMaker } = require('./marker.js')
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoibmEteWEiLCJhIjoiY2pnczQ4cWJrMDB3azJ3czNnNW0yZmFkNyJ9.lM-R7RTkhEeh6RMjc9-Bmw';


const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// let locationNode = document.createElement('div');
// locationNode.style.width = '28px';
// locationNode.style.height = '39px';
// // locationNode.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'
// locationNode.style.backgroundImage = 'url(../public/dropPin.png)';

const fullstackMarker = markerMaker('hotel', [-74.009, 40.705], map);
