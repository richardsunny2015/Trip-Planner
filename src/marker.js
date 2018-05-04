const mapboxgl = require('mapbox-gl');

function markerMaker(activity, locArray, map) {
  let img;
  let locationNode = document.createElement('div');
  locationNode.style.width = '28px';
  locationNode.style.height = '39px';
  if (activity === 'hotel') img = 'url(http://i.imgur.com/D9574Cu.png)';
  else if (activity === 'restaurant') img = 'url(http://i.imgur.com/cqR6pUI.png)';
  else img = 'url(../public/dropPin.png)';
  locationNode.style.backgroundImage = img;

  return new mapboxgl.Marker(locationNode).setLngLat(locArray).addTo(map);
}







module.exports = {
  markerMaker
}
