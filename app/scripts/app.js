var app;

app = angular.module('wfApp', ['ui.router']);

app.run(function($rootScope, $state, $stateParams, $timeout) {});

app.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/main', '/main/home');
  $urlRouterProvider.otherwise('/main');
  $httpProvider.interceptors.push('httpInterceptor');
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

app.factory('httpInterceptor', [
  '$rootScope', '$q', '$injector', function($rootScope, $q, $injector) {
    var httpInterceptor;
    httpInterceptor = {
      'responseError': function(response) {
        return $q.reject(response);
      },
      'response': function(response) {
        $rootScope.loading = false;
        return response;
      },
      'request': function(config) {
        $rootScope.loading = true;
        return config;
      },
      'requestError': function(config) {
        console.log('request err');
        return $q.reject(config);
      }
    };
    return httpInterceptor;
  }
]);

app.config(function($stateProvider) {
  return $stateProvider.state('main.about', {
    url: '/about',
    templateUrl: 'tpls/about/about.html',
    controller: 'aboutCtrl'
  });
});

app.controller('aboutCtrl', function($scope, $rootScope) {});

app.config(function($stateProvider) {
  return $stateProvider.state('main.comment', {
    url: '/comment',
    templateUrl: 'tpls/comment/comment.html',
    controller: 'commentCtrl'
  });
});

app.controller('commentCtrl', function($scope) {});

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
  return $stateProvider.state('main.link', {
    url: '/link',
    templateUrl: 'tpls/link/link.html',
    controller: 'linkCtrl'
  });
});

app.controller('linkCtrl', function($scope) {});

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
    return console.log('state change start');
  });
  $scope.$on('$stateChangeSuccess', function() {});
  $scope.$on('$stateChangeError', function() {});
  $scope.$on('$viewContentLoading', function(event, viewConfig) {});
  return $scope.$on('$viewContentLoaded', function() {});
});

app.controller('navbarCtrl', function($scope) {});
