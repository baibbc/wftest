app.controller 'homeCtrl', ($scope, $state, session) ->
  $scope.ui =
    hasErr: false
    email: 'baibbc@126.com'
    pwd: '123'
  if session.get('email') and session.get('ACCESS_TOKEN')
    $state.go 'app.wechat',
      user_id: session.get('ACCESS_TOKEN')

  $scope.keyDownLogin = (e) ->
    key = if window.event then e.keyCode else e.which
    if key == 13
      $scope.doLogin()
    return

  $scope.doLogin = ->
    admin =
      name: 'baibbc@126.com'
      pwd: '123'
    if $scope.ui.email == '' or $scope.ui.pwd == ''
      $scope.ui.hasErr = true
      console.log 'please input your id'
    else
      if $scope.ui.email == admin.name and $scope.ui.pwd == admin.pwd
        session.set 'email', $scope.ui.email
        session.set 'ACCESS_TOKEN', $scope.ui.pwd
        $state.go 'app.wechat',
          user_id: $scope.ui.pwd
      else
        console.log 'err'
        $scope.ui.hasErr = true
    return
  return