app.controller 'headerCtrl',
($scope, $rootScope, $location, $state, session) ->
  $scope.ui =
    isActive: false
    email: session.get 'email'

  setActive = ->
    console.log $state
    if $state.current.url == '/about' or
    $state.current.url == '/images' or
    $state.current.url == '/fans'
      $scope.ui.isActive = true
    else
      $scope.ui.isActive = false
    return

  $rootScope.$on '$stateChangeSuccess', ->
    setActive()
    return

  $scope.logout = ->
    session.remove 'email'
    $state.go 'home'
    return

  setActive()
  return