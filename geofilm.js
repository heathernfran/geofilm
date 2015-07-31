Places = new Mongo.Collection('places');

function Place(placename, clientname, notes, latitude, longitude, timestamp) {
  this.placename = placename;
  this.clientname = clientname;
  this.notes = notes;
  this.latitude = latitude;
  this.longitude = longitude;
  this.timestamp = timestamp;
}

Place.prototype = {
  save: function() {
    Places.insert({
      placename: this.placename,
      clientname: this.cliname,
      notes: this.notes,
      latitude: this.latitude,
      longitude: this.longitude,
      timestamp: this.timestamp
    });
  }
};

// get current coordinates
function findCurrentLocation() {
  Tracker.autorun(function() {
    Geolocation.currentLocation(function(position) {
      Places.insert({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timestamp: position.timestamp
      });
    });
  });
}

// add new location to db
function addNewLocation(placename, clientname, notes) {
  Places.insert({
    placename: placename,
    clientname: clientname,
    notes: notes
  }, findCurrentLocation());
}


if (Meteor.isClient) {

  // Template.body.helpers({
  //   locations: [
  //     { loc: 'get location' },
  //   ]
  // });

  // Template.body.helpers({
  //   locs: function() {
  //     return Locs.find({});
  //   }
  // });

  Template.geoform.events({
    // listen for new location to be entered
    "submit #newplace": function(event) {

      event.preventDefault();

      var placename = event.target.placename.value,
          clientname = event.target.clientname.value,
          notes = event.target.notes.value;

      addNewLocation(placename, clientname, notes);

      event.target.placename.value = '';
      event.target.clientname.value = '';
      event.target.notes.value = '';
    }
  });
}
