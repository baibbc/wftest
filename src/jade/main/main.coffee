app.controller 'mainCtrl',
($scope, $rootScope, $http, $state, $location, $stateParams, session, person) ->
  # 路由resolve注入person
  # 当状态改变开始的时候被触发
  $scope.$on '$stateChangeStart', ->
    console.log 'state change start'
  # 当状态改变成功后被触发
  $scope.$on '$stateChangeSuccess', ->
  # 当状态改变遇到错误时被触发，错误通常是目标无法载入，需要预载入的数据无法被载入等
  $scope.$on '$stateChangeError', ->
  # 当视图正在被载入且在DOM被渲染之前触发
  $scope.$on '$viewContentLoading', (event, viewConfig) ->
  # 视图加载完
  $scope.$on '$viewContentLoaded', ->