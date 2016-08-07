app.controller 'aboutCtrl', ($scope, $state, dialogs, session) ->
  $scope.ui =
    dataArr: [
      {
        name: "放假通知",
        template_id_short: "TM00221",
        main_industry: "教育",
        industry_code: "17",
        vice_industry: "院校"
      },
      {
        name: "上班通知",
        template_id_short: "TM00221",
        main_industry: "教育",
        industry_code: "17",
        vice_industry: "院校"
      }
    ]

  $scope.getDetail = (index) ->
    dialogs.create 'tpls/about/add/edit.html', 'aboutEditCtrl',
    $scope.ui.dataArr[index],
      size: 'lg'
      animation: true
      backdrop: 'static'
      backdropClass: 'wfeng'
      windowClass: 'w-wfeng'
    .result.then ((option) ->
      if option != 'cancel'
        $scope.ui.dataArr[index] = option
      return
    )

  $scope.errDialog = ->
    dialogs.error 'err title', 'err message',
      size: 'sm'
      animation: true
    return

  $scope.waitDialog = ->
    dialogs.wait 'wait title', 'wait message', 10,
      size: 'sm'
      animation: true
    return

  $scope.notifyDialog = ->
    dialogs.notify 'notify title', 'notify message',
      size: 'sm'
      animation: true
    return

  $scope.confirmDialog = ->
    dialogs.confirm 'confirm title', 'confirm content',
      size: 'sm'
      animation: true
    return