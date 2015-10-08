// geolocation api
var geoOptions = {
  enableHighAccuracy: false,
  maximumAge: 10000,
  timeout: 5000
};

// TODO remove .getCurrentPostion and .clearWatch functions, use navigator.geolocation.watchPosition
var watchId = navigator.geolocation.getCurrentPosition(getLocation, errorForLocation, geoOptions);

function getLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  $('#current #lat').append(latitude);
  $('#current #long').append(longitude);
  mapLocation(latitude, longitude);
  clearLocation(watchId);
}

function mapLocation(posLat, posLong) {
  var img = new Image();
  img.src = 'https://maps.googleapis.com/maps/api/staticmap?center=' + posLat + ',' + posLong + '&zoom=13&size=300x300&sensor=false';
  $('#map').append(img);
}

function clearLocation(watchId) {
  navigator.geolocation.clearWatch(watchId);
}

function errorForLocation() {
  alert('Could not get current location');
}
