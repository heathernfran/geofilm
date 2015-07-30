Locations = new Mongo.Collection('locations');

// get user's current position
function findCurrentLocation() {
  if (!navigator.geolocation) {
    console.log('Geolocation is not supported');
  }

  function error() {
    console.log('Unable to get location');
  }

  function success(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var timestamp = position.timestamp;

    Locations.insert({
      latitude: lat,
      longitude: long,
      timestamp: timestamp
    });
  }

  navigator.geolocation.getCurrentPosition(success, error);

}

// add new location to db
function addNewLocation(location, client, notes) {

  Locations.insert({
    location: location,
    client: client,
    notes: notes
  });

  findCurrentLocation();
}



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
    " #new-loc": function(event) {

      event.preventDefault();

      var location = event.target.location.value,
          client = event.target.client.value,
          notes = event.target.notes.value;

      // addNewLocation(location, client, notes);

      event.target.location.value = '';
      event.target.client.value = '';
      event.target.notes.value = '';
    }
  });
}
