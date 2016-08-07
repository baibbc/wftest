app.config ($stateProvider) ->
  $stateProvider.state 'app.about',
    url: '/about'
    templateUrl: 'tpls/about/about.html'
    controller: 'aboutCtrl'