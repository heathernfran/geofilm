describe('Places', function() {

  beforeEach(function() {
    this.placename = 'test place name';
    this.clientname = 'test client name';
    this.notes = 'test notes for this doc';
    this.place = new Place(this.placename, this.clientname, this.notes);
  });

  it('has place, client, and notes', function() {
    expect(this.place.placename).toEqual(this.placename);
    expect(this.place.clientname).toEqual(this.clientname);
    expect(this.place.notes).toEqual(this.notes);
  });

  describe('insert new object', function() {
    beforeEach(function() {
      spyOn(Places, 'insert');

      this.place.save();
    });

    it('inserts into database', function() {
      expect(Places.insert).toHaveBeenCalled();
    });
  });

});
