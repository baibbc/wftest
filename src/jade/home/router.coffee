app.config ($stateProvider) ->
  $stateProvider.state 'home',
    url: '/home'
    templateUrl: 'tpls/home/home.html'
    controller: 'homeCtrl'