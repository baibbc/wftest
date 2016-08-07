var app;

app = angular.module('wfApp', ['ui.router']);

app.run(function($rootScope, $state, $stateParams, $timeout) {});

app.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/main', '/main/home');
  $urlRouterProvider.otherwise('/main');
  $httpProvider.interceptors.push('loading');
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

app.factory('loading', function($rootScope) {
  var loadingMarker;
  loadingMarker = {
    request: function(config) {
      $rootScope.loading = true;
      console.log('config');
      return config;
    },
    response: function(response) {
      $rootScope.loading = false;
      console.log(response);
      return response;
    }
  };
  return loadingMarker;
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

app.controller('mainCtrl', function($scope, $rootScope, $http, $state, $location, $stateParams, session, person) {
  $scope.$on('$stateChangeStart', function() {
    return console.log('state change');
  });
  $scope.$on('$stateChangeSuccess', function() {
    return console.log('state change success');
  });
  $scope.$on('$stateChangeError', function() {
    return console.log('state change error');
  });
  $scope.$on('$viewContentLoading', function(event, viewConfig) {
    return console.log(viewConfig);
  });
  return $scope.$on('$viewContentLoaded', function() {
    return console.log('view content loaded');
  });
});

app.controller('navbarCtrl', function($scope) {});

app.config(function($stateProvider) {
  return $stateProvider.state('main.about', {
    url: '/about',
    templateUrl: 'tpls/about/about.html',
    controller: 'aboutCtrl'
  });
});

app.controller('aboutCtrl', function($scope, $rootScope) {});
