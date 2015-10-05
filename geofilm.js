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

  // angularjs, for inserting new locations
  // angular.module('geofilmApp', ['angular-meteor'])
  //   .controller('geoformCtrl', ['$scope', '$meteor' function($scope, $meteor) {
  //     $scope.locations = $meteor.collection(Locations);
  //
  //     $scope.addLocation = function(location, client, notes) {
  //       $scope.locations.push({
  //         location: location,
  //         client: client,
  //         notes: notes,
  //         createdAt: new Date()
  //       });
  //     };
  //   }]);

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
