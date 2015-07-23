var geocoder;
var map;
var components={};
function initialize() {

  var markers = [];
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // var defaultBounds = new google.maps.LatLngBounds(
  //     new google.maps.LatLng(55.668495, 37.280803),
  //     new google.maps.LatLng(55.668495, 37.280803));
  // map.fitBounds(defaultBounds);

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(input);

  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
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
            }
            else
            {
                $( ".wrongplace" ).css( "display", "block" );
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





    $(document).ready(function() {
      $( "document" ).mousedown(function() {
        alert( "Handler for .mousedown() called." );
      });
    });

  // window.setInterval(function(){
  //   $(document).ready(function() {
  //     $('.pac-container').click(function () {
  //         alert('asfsdfsdfsdf');
  //         // codeAddress();
  //     }); 
  //   });
  // }, 1000);

$( "#pac-input" ).on( 'click', '.pac-container', function () {
alert( 'WORKS!' );
});

// inputAddress();


$("#logo_text").click(function () {      alert('asfsdfsdfsdf');      });

// window.setInterval(function(){
//   $('.logo').click(function () {
//     // codeAddress();
//     alert('SFD');
//   });
// }, 1000);



