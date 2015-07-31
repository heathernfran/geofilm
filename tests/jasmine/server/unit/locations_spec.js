describe('Places', function() {

  // test user input -- input for placename, client name, and notes
  beforeEach(function() {
    // geolocation function to get coordindates and timestamp
    Geolocation.currentLocation(function(pos) {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
      this.timestamp = pos.timestamp;
    });

    this.placename = 'test place name';
    this.clientname = 'test client name';
    this.notes = 'test notes for this doc';
    this.place = new Place(this.placename, this.clientname, this.notes, this.latitude, this.longitude, this.timestamp);
  });

  it('has user input data and geolocation', function() {
    expect(this.place.placename).toEqual(this.placename);
    expect(this.place.clientname).toEqual(this.clientname);
    expect(this.place.notes).toEqual(this.notes);
    expect(this.place.latitude).toEqual(this.latitude);
    expect(this.place.longitude).toEqual(this.longitude);
    expect(this.place.timestamp).toEqual(this.timestamp);
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

  // test that geolocation data is inserted -- latitude, longitude, timestamp
  // describe('gets current location', function() {
  //   beforeEach(function() {
  //     navigator.geolocation.getCurrentPosition(function(pos) {
  //       this.latitude = pos.coords.latitude;
  //       this.longitude = pos.coords.longitude;
  //       this.timestamp = pos.timestamp;
  //       this.place = new Place(this.latitude, this.longitude, this.timestamp);
  //     });
  //
  //     it('has geolocation and timestamp', function() {
  //       expect(this.place.latitude).toEqual(this.latitude);
  //       expect(this.place.longitude).toEqual(this.longitude);
  //       expect(this.place.timestamp).toEqual(this.timestamp);
  //     });

      // describe('insert new object with geolocation data', function() {
      //   beforeEach(function() {
      //     spyOn(Places, 'insert');
      //
      //     this.place.save();
      //   });
      //
      //   it('inserts current location', function() {
      //     expect(Places.insert).toHaveBeenCalled();
      //   });
      // });

    // });
  // });

});
