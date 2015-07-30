Locations = new Mongo.Collection('locations');

function Loc(place, cli, notes) {
  // latitude, longitude, timestamp) {
  this.place = place;
  this.cli = cli;
  this.notes = notes;
  // this.latitude = latitude;
  // this.longitude = longitude;
  // this.timestamp = timestamp;
}

Loc.prototype = {
  // valid: function() {
  //   return this.loc && this.loc != "";
  // },
  save: function() {
    Locations.insert({
      place: this.place,
      client: this.cli,
      notes: this.notes
    });
  }
};

// get user's current position
function findCurrentLocation() {
  if (!navigator.geolocation) {
    console.log('Geolocation is not supported');
  }

  function error() {
    console.log('Unable to get location');
  }

  function success(position) {
    Locations.insert({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      timestamp: position.timestamp
    });
  }

  navigator.geolocation.getCurrentPosition(success, error);

}

// add new location to db
function addNewLocation(place, client, notes) {
  Locations.insert({
    place: place,
    client: client,
    notes: notes
  }, findCurrentLocation());
}

// function addNewLocation(l, c, n) {
//   Locations.insert({
//     location: l,
//     client: c,
//     notes: n
//   }, function(err, objectId) {
//     if (err) return;
//     findCurrentLocation(objectId._id);
//   });
// }



if (Meteor.isClient) {

  Template.body.helpers({
    locations: [
      { loc: 'get location' },
    ]
  });

  Template.body.helpers({
    locs: function() {
      return Locs.find({});
    }
  });

  Template.body.events({
    // listen for new location to be entered
    "submit #new-loc": function(event) {

      event.preventDefault();

      var place = event.target.place.value,
          client = event.target.client.value,
          notes = event.target.notes.value;

      addNewLocation(place, client, notes);

      event.target.place.value = '';
      event.target.client.value = '';
      event.target.notes.value = '';
    }
  });
}
