app.config(function($stateProvider) {
  return $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'tpls/about/about.html',
    controller: 'aboutCtrl'
  });
});