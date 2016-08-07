app = angular.module 'wfApp', [
  'ui.router'
]
app.run ($rootScope, $state, $stateParams, $timeout) ->

app.config ($httpProvider, $stateProvider, $urlRouterProvider) ->
  $urlRouterProvider.when '/main', '/main/home'
  $urlRouterProvider.otherwise '/main'
  $httpProvider.interceptors.push 'httpInterceptor'
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

app.factory 'httpInterceptor', [
  '$rootScope'
  '$q'
  '$injector'
  ($rootScope, $q, $injector) ->
    httpInterceptor =
      'responseError': (response) ->
        $q.reject response
      'response': (response) ->
        $rootScope.loading = false
        response
      'request': (config) ->
        $rootScope.loading = true
        config
      'requestError': (config) ->
        console.log 'request err'
        $q.reject config
    httpInterceptor
]