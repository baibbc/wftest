app.config ($stateProvider) ->
  $stateProvider.state 'main.about',
    url: '/about'
    templateUrl: 'tpls/about/about.html'
    controller: 'aboutCtrl'