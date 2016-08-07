var app;

app = angular.module('wfApp', ['ui.router']);

app.run(function($rootScope, $state, $stateParams, $timeout) {});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/main', '/main/home');
  $urlRouterProvider.otherwise('/main');
});

app.factory('session', function() {
  return {
    set: function(key, data) {
      return window.sessionStorage.setItem(key, JSON.stringify(data));
    },
    get: function(key) {
      if (window.sessionStorage.getItem(key) === null || window.sessionStorage.getItem(key) === 'undefined') {
        return null;
      } else {
        return JSON.parse(window.sessionStorage.getItem(key));
      }
    },
    remove: function(key) {
      return window.sessionStorage.removeItem(key);
    }
  };
});

app.config(function($stateProvider) {
  return $stateProvider.state('main.home', {
    url: '/home',
    templateUrl: 'tpls/home/home.html',
    controller: 'homeCtrl'
  });
});

app.controller('homeCtrl', function($scope, $state, session) {
  return $scope.ui = {
    title: 'wftest'
  };
});

app.config(function($stateProvider) {
  return $stateProvider.state('main.about', {
    url: '/about',
    templateUrl: 'tpls/about/about.html',
    controller: 'aboutCtrl'
  });
});

app.controller('aboutCtrl', function($scope) {});

app.config(function($stateProvider) {
  return $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'tpls/main/main.html',
    controller: 'mainCtrl',
    resolve: {
      person: function() {
        return {
          name: 'wfeng',
          mail: 'baibbc@126.com'
        };
      }
    }
  });
});

app.controller('mainCtrl', function($scope, $rootScope, $http, $state, $location, session, person) {});

app.controller('navbarCtrl', function($scope) {});
