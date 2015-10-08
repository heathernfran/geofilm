Router.configure({
  layoutTemplate: 'layout'
})

var location = Iron.Location.get()
if (location.queryObject.platformOverride) {
  Session.set('platformOverride', location.queryObject.platformOverride)
}

Router.map(function() {
  this.route('currentLocation')
  this.route('index', {
    path: '/'
  })
})
