app.config ($stateProvider) ->
  $stateProvider.state 'app.wechat',
    url: '/wechat'
    templateUrl: 'tpls/wechat/wechat.html'
    controller: 'wechatCtrl'