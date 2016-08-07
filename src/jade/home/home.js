app.controller('homeCtrl', function($scope, $state, session) {
  $scope.ui = {
    hasErr: false,
    email: '',
    pwd: ''
  };
  if(session.get('email')){
    $state.go('about');
  };

  $scope.keyDownLogin = function(e) {
    var key;
    key = window.event ? e.keyCode : e.which;
    if(key === 13){
      $scope.doLogin();
    }
  }

  $scope.doLogin = function(){
    var admin = {name:'baibbc@126.com', pwd:'123'}
    if($scope.ui.email === '' || $scope.ui.pwd === ''){
      $scope.ui.hasErr = true;
      console.log('please input your id');
    }else{
      if($scope.ui.email === admin.name && $scope.ui.pwd === admin.pwd){
        session.set('email', $scope.ui.email);
        $state.go('about');
      }else{
        console.log('err');
        $scope.ui.hasErr = true;
      }
    }
    //$state.go('about');
  }
});