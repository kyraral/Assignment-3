let geocoder = new google.maps.Geocoder();

let successHandler = function(position) {
    let home = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    let map = new google.maps.Map(document.getElementById('map'), {
      center: home,
      zoom: 13
    });

    let uscMarker = new google.maps.Marker({
      map: map,
      position: home,
      animation: google.maps.Animation.DROP
    });

    geocoder.geocode({
      location: home
    }, function(geocoderResults) {
      console.log(geocoderResults);
      let address= geocoderResults[0].formatted_address;

      let infoWindow = new google.maps.InfoWindow({
        position: home,
        content: address
      });

      google.maps.event.addListener(uscMarker, 'click', function() {
        infoWindow.open(map);
      });
    });
  };
  let errorHandler = function(error) {};
  let options = {};
  navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);
