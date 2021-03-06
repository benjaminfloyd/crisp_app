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
      template: "<crisp-user></crisp-user>",
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
			}
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
			params: {userId: null, listId: null},
			resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })
    .state("newList", {
			url: "/users/:userId/list/new",
      template: "<new-list></new-list>",
      params: {userId: null}
    })
    
    .state('recipes',{
      url:"/recipes",
      template: "<recipes></recipes>",
      params: {recipes: null}
    })
    .state('recipeShow', {
      url:"/recipe",
      template: "<recipe-show></recipe-show>",
      params: {recipe: null}
    })
	$urlRouterProvider.otherwise("/");
}
