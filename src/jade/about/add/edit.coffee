app.controller 'aboutEditCtrl',
($scope, $http, $state, $uibModalInstance, data) ->
  $scope.ui = data
  $scope.cancel = ->
    $uibModalInstance.close 'cancel'
  $scope.save = ->
    $uibModalInstance.close $scope.ui