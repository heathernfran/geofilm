describe('Places', function() {

  beforeEach(function() {

    // add new location to db
    function addNewLocation(placename, clientname, notes) {
      Places.insert({
        placename: placename,
        clientname: clientname,
        notes: notes
      }, setInterval());
    }

    // get current coordinates
    function setInterval() {
      Tracker.autorun(function() {
        Geolocation.currentLocation(function(position) {
          Session.set('lat', position.coords.latitude);
          Session.set('long', position.coords.longitude);
          Session.set('timestamp', position.timestamp);
          // Places.insert({
          //   latitude: Session.get('lat'),
          //   longitude: Session.get('long'),
          //   timestamp: Session.get('timestamp')
          // });
        }, 10000);
      });
    }


    this.placename = 'test place name';
    this.clientname = 'test client name';
    this.notes = 'test notes for this doc';
    this.place = new Place(this.placename, this.clientname, this.notes);

    spyOn(this.place, 'addNewLocation');

    addNewLocation(this.placename, this.clientname, this.notes);

    // spyOn(this.place, 'addNewLocation');

    // setInterval();

  });

  it('has user input data and geolocation', function() {
    expect(this.place.placename).toEqual(this.placename);
    expect(this.place.clientname).toEqual(this.clientname);
    expect(this.place.notes).toEqual(this.notes);

    expect(Session.get('lat')).not.toBeUndefined();

    // expect(this.place.latitude).not.toBeUndefined();
    // expect(this.place.longitude).not.toBeUndefined();
    // expect(this.place.timestamp).not.toBeUndefined();


    // honolulu
    // expect(this.place.latitude).toEqual(21.3077169);
    // expect(this.place.longitude).toEqual(-157.8614089);
  });

  describe('adds and saves new object', function() {
    beforeEach(function() {
      spyOn(Places, 'insert');

      this.place.save();
    });

    it('inserts into database', function() {
      expect(Places.insert).toHaveBeenCalled();
    });
  });

});
