app.config ($stateProvider) ->
  $stateProvider.state 'app',
    url: '/:user_id'
    abstract: true
    templateUrl: 'tpls/main/main.html'
    controller: 'mainCtrl'
    resolve:{
      person: ->
        name:'wfeng'
        mail:'baibbc@126.com'
    }