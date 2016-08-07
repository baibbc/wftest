app.config ($stateProvider) ->
	$stateProvider.state 'main.home',
		url: '/home'
		templateUrl: 'tpls/home/home.html'
		controller: 'homeCtrl'