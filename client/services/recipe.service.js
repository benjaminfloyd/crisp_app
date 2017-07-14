const angular = require("angular");

recipeService.$inject = ["$http","$state"];

function recipeService ($http,$state) {
	const service = this;

service.searchRecipe = function (searchTerm) {
		var searchUrl = '/search/' + searchTerm
		return $http.get(searchUrl).then(response => {
		
			$state.go('recipes', { recipes: response.data });
			return response.data;
		});
    };
}    
 angular.module("CrispApp").service("recipeService", recipeService);   
