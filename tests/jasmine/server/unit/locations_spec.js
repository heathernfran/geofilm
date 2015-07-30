describe('Location', function() {

  beforeEach(function() {
    this.place = 'test place name';
    this.cli = 'test client name';
    this.notes = 'test notes for this doc';
    this.loc = new Location(this.place, this.cli, this.notes);
  });

  it('has place, client, and notes', function() {
    expect(this.loc.place).toEqual(this.place);
    expect(this.loc.cli).toEqual(this.cli);
    expect(this.loc.notes).toEqal(this.notes);
  });

  describe('#save', function() {
    beforeEach(function() {
      spyOn(Locations, 'insert');

      this.loc.sav();
    });

    it('inserts into database', function() {
      expect(Locations.insert).toHaveBeenCalled();
    });
  });

});
