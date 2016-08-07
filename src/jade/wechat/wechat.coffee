app.controller 'wechatCtrl', ($scope, $state, session) ->
  $scope.ui=
    wechats: [
      {
        name: '易研科技测试号 '
        weixin_id: 'ersinfotechtest'
        version_name: '內地版'
        type_name: '服務號'
        created_at_text: '20160630'
      }
    ]