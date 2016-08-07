app.config ($stateProvider) ->
  $stateProvider.state 'main.link',
    url: '/link'
    templateUrl: 'tpls/link/link.html'
    controller: 'linkCtrl'