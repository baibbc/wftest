app.controller 'mainCtrl',
($scope, $rootScope, $http, $state, $location, session, person) ->
  # 路由resolve注入person