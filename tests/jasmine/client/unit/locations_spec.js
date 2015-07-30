describe('Location', function() {

describe("insertLocation", function() {
  it("should insert into database", function() {
    var testPlace = 'test place',
        testClient = 'test client',
        testNotes = 'test notes';

    spoyOn(Locations, 'insert').and.returnValue(result);
  });

  expect(LocationsService.insertLocation(testPlace, testClient, testNotes)).toBe(result);
  expect(Locations.find.calls.argsFor(0)).toEqual(testLoc);
});

});
