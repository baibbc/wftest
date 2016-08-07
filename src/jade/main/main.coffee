app.controller 'mainCtrl',
($scope, $rootScope, $http, $state, $location, session, person) ->
  # 路由resolve注入person
  if session.get('email') == null
    $state.go 'home'
  if !$state.params.user_id
    $state.go 'app.wechat',
      user_id: session.get('ACCESS_TOKEN')
    return