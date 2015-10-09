// Leaflet package
// set image path
// L.Icon.Default.imagePath = 'packages/beavanhunt_leaflet/images'
// var map = L.map('map')

// set map tile
// L.tileLayer.provider('Thunderforest.Outdoors').addTo(map)

Template.currentLocation.helpers({
  location: function() {
    return Geolocation.latLng()
  },
  error: Geolocation.error()
})
