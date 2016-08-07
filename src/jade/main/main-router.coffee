app.config ($stateProvider) ->
  $stateProvider.state 'main',
    url: '/main'
    #abstract: true
    templateUrl: 'tpls/main/main.html'
    controller: 'mainCtrl'
    resolve:{
      person: ->
        name:'wfeng'
        mail:'baibbc@126.com'
    }