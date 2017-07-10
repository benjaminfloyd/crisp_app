const angular = require("angular");
                require("angular-ui-router");
                require("ng-token-auth");
                require("angular-cookie");
angular.module('CrispApp', ['ng-token-auth','ui.router','ipCookie'])
	.config(router)
  .config(function($authProvider) {
    $authProvider.configure({
      apiUrl:                  '/api',
      tokenValidationPath:     '/auth/validate_token',
      signOutUrl:              '/auth/sign_out',
      emailRegistrationPath:   '/auth',
      accountUpdatePath:       '/auth',
      accountDeletePath:       '/auth'
    });
  });
  

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("home", {
			url: "/",
			template: "<crisp-login></crisp-login>"
		})
		.state("user", {
			url: "/user/:id",
			template: "<crisp-user></crisp-user>"
		})
		.state("newUser", {
			url: "/user/new",
			template: "<crisp-new-user></crisp-new-user>"
		});

	$urlRouterProvider.otherwise("/");
}
