describe('Places', function() {

describe("insert places", function() {
  it("should insert into database", function() {

    Geolocation.currentLocation(function(pos) {
      var latitude = pos.coords.latitude,
          longitude = pos.coords.longitude,
          timestamp = pos.timestamp;
    });


    var testPlace = 'test place 0',
        testClient = 'test client 0',
        testNotes = 'test notes 0';

    spyOn(Places, 'insert').and.returnValue(result);
  });

  expect(Places.insertPlace(testPlace, testClient, testNotes, latitude, longitude, timestamp)).toBe(result);
  // expect(Locations.find.calls.argsFor(0)).toEqual(result);
});

});


describe('add new location', function() {
  it('should add geolocation and user data into database', function() {
    var testPlace = 'test place 1',
        testClient = 'test client 1',
        testNotes = 'test notes 1';

    addNewLocation(testPlace, testClient, testNotes);

    spyOn(Places, 'insert').and.returnValue(result);
  });

  expect(Places.insertPlace(testPlace, testClient, testNotes, latitude, longitude, timestamp)).toBe(result);
});
