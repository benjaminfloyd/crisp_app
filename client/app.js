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
      accountDeletePath:       '/auth',
			validateOnPageLoad:      'false'
    });
  });
  

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("home", {
			url: "/",
			template: "<crisp-home></crisp-home>",
			resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
			}
		})
		.state("signIn", {
      url: "/sign_in",
      template: "<sign-in></sign-in>"
    })
		.state("userRegistration", {
      url: "/user_registration",
      template: "<user-registration></user-registration>"
    })
		.state("users", {
			url: "/users/:userId",
			template: "<crisp-user></crisp-user>"
    })
    
    .state("lists", {
			url: "/users/:userId/list",
			template: "<user-list></user-list>",
			resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
		})
		.state("list", {
			url: "/users/:userId/list/:listId",
			template: "<user-list></user-list>",
			params: {id: null, list: null},
			resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
		})
	$urlRouterProvider.otherwise("/");
}
