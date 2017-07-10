const angular = require("angular");
                require("angular-ui-router");
                require("ng-token-auth");
                require("angular-cookie");
angular.module('CrispApp', ['ng-token-auth',                                 'ui.router',                                     'ipCookie'])
  .config(router, function($authProvider) {
    $authProvider.configure({
      apiUrl: 'localhost:3000/',
      validateOnPageLoad: false
    });
});

