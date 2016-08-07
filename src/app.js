var app = angular.module('myApp', ['ui.router','ui.bootstrap']);

app.run(function($rootScope, $state, $stateParams, $timeout) {
  // $timeout((function() {
  //   alert('a');
  // }), 2500);
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when("", "/home");
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "tpls/home/home.html",
      controller: 'homeCtrl'
  })
});

app.factory('session', function(){
  return {
    set: function(key, data){
      window.sessionStorage.setItem(key, JSON.stringify(data));
    },
    get: function(key){
      return JSON.parse(window.sessionStorage.getItem(key));
    },
    remove: function(key){
      window.sessionStorage.removeItem(key);
    }
  }
});