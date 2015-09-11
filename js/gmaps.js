var geocoder;
var map;
var components={};
var okplace = 1;
function initialize() {


  var markers = [];
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

 var options = {
  types: ['(cities)'],
  componentRestrictions: {country: "us"}
 };

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');

  var autocomplete = new google.maps.places.Autocomplete(input, options);

  var searchBox = new google.maps.places.SearchBox(input);

  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var place = searchBox.getPlaces()[0];

   
    if (!place.geometry) return;

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    codeAddress();
  });

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });



  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(55.668495, 37.280803);
  var mapOptions = {
    zoom: 16,
    disableDefaultUI: true,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}



function codeAddress() {
  var address = document.getElementById('pac-input').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
      // console.log(results[0].geometry.location.lat());
      // 55.753854, 37.623539
      var enteredloc = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
      var centerloc = new google.maps.LatLng(55.753854, 37.623539);
      // console.log(google.maps.geometry.spherical.computeDistanceBetween(enteredloc, centerloc));
      if( google.maps.geometry.spherical.computeDistanceBetween(enteredloc, centerloc) < 4800 )
            {
              $( ".wrongplace" ).css( "display", "none" );
              okplace = 1;
            }
            else
            {
                $( ".wrongplace" ).css( "display", "block" );
                okplace = 0;
            }
    } else {
      // alert('Пожалуйста, введите свой адрес сверху страницы и нажмите Enter');
    }
  });
}

function inputAddress() {
  var inputCity = document.getElementById("inputCity");
  inputCity.value = components.locality;
  var inputStreet = document.getElementById("inputStreet");
  inputStreet.value = components.route;
  var inputHouse = document.getElementById("inputHouse");
  inputHouse.value = components.street_number;
}




// $("html").keypress(function(e) {
//     if(e.which == 13) {
//       codeAddress();
//     }
// });

// $('#logo_text').click(function () {
//       alert('asfsdfsdfsdf');
//       // codeAddress();
//     });

  
// $(".pac-container'").live("click", function(){
// alert();
// });
// $(document).ready(function() {
//   $(".pac-container'").live("click", function(){
//     alert("asds");
//   });
// });

// $( document ).on( 'click', '.pac-item', function () {
// alert( 'WORKS!' );
// });

// google.maps.event.addListener(autocomplete, 'place_changed', function(event) {
// alert("dsf");
// });

google.maps.event.addDomListener(window, 'load', initialize);



