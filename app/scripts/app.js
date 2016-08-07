var app;

app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'dialogs.main', 'pascalprecht.translate']);

app.run(function($rootScope, $state, $stateParams, $timeout) {});

app.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
  $urlRouterProvider.otherwise('//wechat');
  $translateProvider.translations('en', {
    DIALOGS_OK: 'OK',
    DIALOGS_YES: 'YES',
    DIALOGS_NO: 'NO',
    DIALOGS_CLOSE: 'CLOSE'
  });
  $translateProvider.translations('cn', {
    DIALOGS_OK: '確定',
    DIALOGS_YES: '是',
    DIALOGS_NO: '否',
    DIALOGS_CLOSE: '關閉'
  });
  $translateProvider.preferredLanguage('cn');
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

app.controller('aboutCtrl', function($scope, $state, dialogs, session) {
  $scope.ui = {
    dataArr: [
      {
        name: "放假通知",
        template_id_short: "TM00221",
        main_industry: "教育",
        industry_code: "17",
        vice_industry: "院校"
      }, {
        name: "上班通知",
        template_id_short: "TM00221",
        main_industry: "教育",
        industry_code: "17",
        vice_industry: "院校"
      }
    ]
  };
  $scope.getDetail = function(index) {
    return dialogs.create('tpls/about/add/edit.html', 'aboutEditCtrl', $scope.ui.dataArr[index], {
      size: 'lg',
      animation: true,
      backdrop: 'static',
      backdropClass: 'wfeng',
      windowClass: 'w-wfeng'
    }).result.then((function(option) {
      if (option !== 'cancel') {
        $scope.ui.dataArr[index] = option;
      }
    }));
  };
  $scope.errDialog = function() {
    dialogs.error('err title', 'err message', {
      size: 'sm',
      animation: true
    });
  };
  $scope.waitDialog = function() {
    dialogs.wait('wait title', 'wait message', 10, {
      size: 'sm',
      animation: true
    });
  };
  $scope.notifyDialog = function() {
    dialogs.notify('notify title', 'notify message', {
      size: 'sm',
      animation: true
    });
  };
  return $scope.confirmDialog = function() {
    dialogs.confirm('confirm title', 'confirm content', {
      size: 'sm',
      animation: true
    });
  };
});

app.config(function($stateProvider) {
  return $stateProvider.state('app.about', {
    url: '/about',
    templateUrl: 'tpls/about/about.html',
    controller: 'aboutCtrl'
  });
});

app.config(function($stateProvider) {
  return $stateProvider.state('app.fans', {
    url: '/fans',
    templateUrl: 'tpls/fans/fans.html',
    controller: 'fansCtrl'
  });
});

app.controller('fansCtrl', function($scope) {});

app.controller('headerCtrl', function($scope, $rootScope, $location, $state, session) {
  var setActive;
  $scope.ui = {
    isActive: false,
    email: session.get('email')
  };
  setActive = function() {
    console.log($state);
    if ($state.current.url === '/about' || $state.current.url === '/images' || $state.current.url === '/fans') {
      $scope.ui.isActive = true;
    } else {
      $scope.ui.isActive = false;
    }
  };
  $rootScope.$on('$stateChangeSuccess', function() {
    setActive();
  });
  $scope.logout = function() {
    session.remove('email');
    $state.go('home');
  };
  setActive();
});

app.controller('homeCtrl', function($scope, $state, session) {
  $scope.ui = {
    hasErr: false,
    email: 'baibbc@126.com',
    pwd: '123'
  };
  if (session.get('email') && session.get('ACCESS_TOKEN')) {
    $state.go('app.wechat', {
      user_id: session.get('ACCESS_TOKEN')
    });
  }
  $scope.keyDownLogin = function(e) {
    var key;
    key = window.event ? e.keyCode : e.which;
    if (key === 13) {
      $scope.doLogin();
    }
  };
  $scope.doLogin = function() {
    var admin;
    admin = {
      name: 'baibbc@126.com',
      pwd: '123'
    };
    if ($scope.ui.email === '' || $scope.ui.pwd === '') {
      $scope.ui.hasErr = true;
      console.log('please input your id');
    } else {
      if ($scope.ui.email === admin.name && $scope.ui.pwd === admin.pwd) {
        session.set('email', $scope.ui.email);
        session.set('ACCESS_TOKEN', $scope.ui.pwd);
        $state.go('app.wechat', {
          user_id: $scope.ui.pwd
        });
      } else {
        console.log('err');
        $scope.ui.hasErr = true;
      }
    }
  };
});

app.config(function($stateProvider) {
  return $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'tpls/home/home.html',
    controller: 'homeCtrl'
  });
});

app.config(function($stateProvider) {
  return $stateProvider.state('app', {
    url: '/:user_id',
    abstract: true,
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

app.controller('mainCtrl', function($scope, $rootScope, $http, $state, $location, session, person) {
  if (session.get('email') === null) {
    $state.go('home');
  }
  if (!$state.params.user_id) {
    $state.go('app.wechat', {
      user_id: session.get('ACCESS_TOKEN')
    });
  }
});

app.config(function($stateProvider) {
  return $stateProvider.state('app.material', {
    url: '/material',
    templateUrl: 'tpls/material/layout/layout.html',
    controller: 'materialLayoutCtrl'
  });
});

app.config(function($stateProvider) {
  return $stateProvider.state('app.material.images', {
    url: '/images',
    templateUrl: 'tpls/material/images/images.html',
    controller: 'materialImageCtrl'
  });
});

app.config(function($stateProvider) {
  return $stateProvider.state('app.wechat', {
    url: '/wechat',
    templateUrl: 'tpls/wechat/wechat.html',
    controller: 'wechatCtrl'
  });
});

app.controller('wechatCtrl', function($scope, $state, session) {
  return $scope.ui = {
    wechats: [
      {
        name: '易研科技测试号 ',
        weixin_id: 'ersinfotechtest',
        version_name: '內地版',
        type_name: '服務號',
        created_at_text: '20160630'
      }
    ]
  };
});

app.controller('aboutEditCtrl', function($scope, $http, $state, $uibModalInstance, data) {
  $scope.ui = data;
  $scope.cancel = function() {
    return $uibModalInstance.close('cancel');
  };
  return $scope.save = function() {
    return $uibModalInstance.close($scope.ui);
  };
});

app.controller('materialImageCtrl', function($scope) {});

app.controller('materialLayoutCtrl', function($scope) {});
