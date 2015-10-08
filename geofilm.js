// Locations = new Mongo.Collection('locations');

// if (Meteor.isClient) {

  // Template.body.helpers({
  //   locations: [
  //     { location: 'get location' },
  //   ]
  // });

  // Template.body.helpers({
  //   locations: function() {
  //     return Locations.find({});
  //   }
  // });

  // Template.body.events({});

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


// }














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
