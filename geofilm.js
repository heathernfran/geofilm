Locations = new Mongo.Collection('locations');


var currentLocation = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var timestamp = position.timestamp;
  });
};

// add new location to db
// Locations.insert({
//   location: location,
//   client: client,
//   notes: notes,
//   userId: userId,
//   latitude: position.coords.latitude,
//   longitude: position.coords.longitude,
//   timestamp: position.timestamp,
// });

// if (Meteor.isCordova) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     var lat = position.coords.latitude;
//     var long = position.coords.longitude;
//   });
// }

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
