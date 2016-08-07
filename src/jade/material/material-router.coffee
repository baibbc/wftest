app.config ($stateProvider) ->
  $stateProvider.state 'app.material',
    url: '/material'
    templateUrl: 'tpls/material/layout/layout.html'
    controller: 'materialLayoutCtrl'
#image
app.config ($stateProvider) ->
  $stateProvider.state 'app.material.images',
    url: '/images'
    templateUrl: 'tpls/material/images/images.html'
    controller: 'materialImageCtrl'