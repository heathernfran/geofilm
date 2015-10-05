Locations = new Mongo.Collection('locations');

if (Meteor.isClient) {

  Template.body.helpers({
    locations: [
      { location: 'get location' },
    ]
  });

  Template.body.helpers({
    locations: function() {
      return Locations.find({});
    }
  });

  Template.body.events({});

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
    $('#lat').append(latitude);
    $('#long').append(longitude);
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

}














/*
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/
