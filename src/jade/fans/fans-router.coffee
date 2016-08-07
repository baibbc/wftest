app.config ($stateProvider) ->
  $stateProvider.state 'app.fans',
    url: '/fans'
    templateUrl: 'tpls/fans/fans.html'
    controller: 'fansCtrl'