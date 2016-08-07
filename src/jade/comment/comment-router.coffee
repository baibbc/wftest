app.config ($stateProvider) ->
  $stateProvider.state 'main.comment',
    url: '/comment'
    templateUrl: 'tpls/comment/comment.html'
    controller: 'commentCtrl'