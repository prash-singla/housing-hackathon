appFindLocation.controller('FindLocationCtrl', function() {
	$scope.getLocation = function() {
		if(navigator.getLocation) {
			navigator.getLocation.getCurrentPosition(function (position) {
					var lat = position.coords.latitude.
						long = position.coords.longitiude;

					console.debug('lat and long is ', lat , long);

			}, function(err) {
				console.debug('geocoder failed');
			} );
		} else {
			console.debug('navigator getLocation isnt available')
		}
	};

	$scope.initialize = function() {
		$scope.geocoder = new google.maps.geocoder();
	};

	$scope.getAddress = function(lat, lng) {
		var latlng = new google.maps.LatLng(lat, lng);
		geocoder.geocode({'latlng': latlng}, function(result, status) {
			if(status === google.maps.GeocoderStatus.OK) {
				console.debug('results are ', result);

			} else {
				console.debug('Geocoder failed due to' , status);
			}
		});
	};
});