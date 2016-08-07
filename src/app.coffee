app = angular.module 'myApp', [
  'ui.router'
  'ui.bootstrap'
  'dialogs.main'
  'pascalprecht.translate'
]
app.run ($rootScope, $state, $stateParams, $timeout) ->

app.config ($stateProvider, $urlRouterProvider, $translateProvider) ->
  # $urlRouterProvider.when '/', '//wechat'
  $urlRouterProvider.otherwise '//wechat'

  $translateProvider.translations 'en',
    DIALOGS_OK: 'OK'
    DIALOGS_YES: 'YES'
    DIALOGS_NO: 'NO'
    DIALOGS_CLOSE: 'CLOSE'

  $translateProvider.translations 'cn',
    DIALOGS_OK: '確定'
    DIALOGS_YES: '是'
    DIALOGS_NO: '否'
    DIALOGS_CLOSE: '關閉'
    
  $translateProvider.preferredLanguage 'cn'
  return

app.factory 'session', ->
  {
    set: (key, data) ->
      return window.sessionStorage.setItem key, JSON.stringify(data)
    get: (key) ->
      if window.sessionStorage.getItem(key) == null or
         window.sessionStorage.getItem(key) == 'undefined'
        return null
      else
        return JSON.parse window.sessionStorage.getItem(key)
    remove: (key) ->
      return window.sessionStorage.removeItem key
  }