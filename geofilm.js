Locations = new Mongo.Collection('locations');

if (Meteor.isClient) {

  Template.body.helpers({
    locations: [
      { location: 'get location' },
    ]
  });

  Template.body.helpers({
    locations: function() {
      return Locations.findAll({});
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
