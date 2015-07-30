describe('Places', function() {

describe("insert places", function() {
  it("should insert into database", function() {
    var testPlace = 'test place',
        testClient = 'test client',
        testNotes = 'test notes';

    spoyOn(Places, 'insert').and.returnValue(result);
  });

  expect(Places.insertPlace(testPlace, testClient, testNotes)).toBe(result);
  expect(Locations.find.calls.argsFor(0)).toEqual(testLoc);
});

});
