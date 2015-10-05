Router.configure({
  layoutTemplate: 'navs'
})

Router.route('/', function() {
  this.render('default');
  this.template('default');
})

Router.route('/login', function() {
  this.render('login');
  this.template('login');
})

Router.route('/addlocation', function() {
  this.render('geoform');
  this.template('geoform');
})

Router.route('/showlocations', function() {
  this.render('showall');
  this.template('showall');
})

Router.route('/currentlocaiton', function() {
  this.render('currentlocation');
  this.template('currentlocation');
})
