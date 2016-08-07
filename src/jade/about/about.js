app.controller('aboutCtrl', function($scope, $state, session) {
  if(session.get('email') === '' || session.get('email') === null){
    $state.go('home');
  };
  $scope.ui = {
    email: session.get('email')
  };
  $scope.logout = function(){
    session.remove('email');
    $state.go('home');
  }
});