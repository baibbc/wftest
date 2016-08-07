app = angular.module 'wfApp', [
  'ui.router'
]
app.run ($rootScope, $state, $stateParams, $timeout) ->

app.config ($httpProvider, $stateProvider, $urlRouterProvider) ->
  $urlRouterProvider.when '/main', '/main/home'
  $urlRouterProvider.otherwise '/main'
  $httpProvider.interceptors.push 'loading'
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

app.factory 'loading', ($rootScope) ->
  loadingMarker = 
    request: (config) ->
      $rootScope.loading = true
      console.log 'config'
      config
    response: (response) ->
      $rootScope.loading = false
      console.log response
      response
  loadingMarker