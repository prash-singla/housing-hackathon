appFindLocation.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'modules/find-location/view.html',
		controller: 'FindLocationCtrl',
		title: 'Welcome to housing'
	})
}]);