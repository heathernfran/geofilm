describe('Places', function() {

describe("insert places", function() {
  it("should insert into database", function() {

    Geolocation.currentLocation(function(pos) {
      var latitude = pos.coords.latitude,
          longitude = pos.coords.longitude,
          timestamp = pos.timestamp;
    });


    var testPlace = 'test place',
        testClient = 'test client',
        testNotes = 'test notes';

    spoyOn(Places, 'insert').and.returnValue(result);
  });

  expect(Places.insertPlace(testPlace, testClient, testNotes, latitude, longitude, timestamp)).toBe(result);
  // expect(Locations.find.calls.argsFor(0)).toEqual(result);
});

});
