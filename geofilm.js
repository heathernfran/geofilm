Places = new Mongo.Collection('places');

function Place(placename, clientname, notes) {
  // latitude, longitude, timestamp) {
  this.placename = placename;
  this.clientname = clientname;
  this.notes = notes;
  // this.latitude = latitude;
  // this.longitude = longitude;
  // this.timestamp = timestamp;
}

Place.prototype = {
  // valid: function() {
  //   return this.loc && this.loc != "";
  // },
  save: function() {
    Places.insert({
      placename: this.placename,
      clientname: this.cliname,
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
    Places.insert({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      timestamp: position.timestamp
    });
  }

  navigator.geolocation.getCurrentPosition(success, error);

}

// add new location to db
function addNewLocation(placename, clientname, notes) {
  Places.insert({
    placename: placename,
    clientname: clientname,
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

  Template.body.events({
    // listen for new location to be entered
    "submit #new-loc": function(event) {

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
