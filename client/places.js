// add new location to db
function addNewLocation(placename, clientname, notes) {
  Places.insert({
    placename: placename,
    clientname: clientname,
    notes: notes
  }, findCurrentLocation());
}

// get current coordinates
function findCurrentLocation() {
  Tracker.autorun(function() {
    Geolocation.currentLocation(function(position) {
      Session.set('lat', position.coords.latitude);
      Session.set('long', position.coords.longitude);
      Session.set('timestamp', position.timestamp);
      Places.insert({
        latitude: Session.get('lat'),
        longitude: Session.get('long'),
        timestamp: Session.get('timestamp')
      });
    });
  });
}
