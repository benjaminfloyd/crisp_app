const angular = require("angular");

recipeService.$inject = ["$http"];

function recipeService ($http) {
	const service = this;

service.searchRecipe = function (searchTerm) {
		var searchUrl = "http://api.yummly.com/v1/api/recipes?_app_id=3fa3ebcf&_app_key=a547eb1a914afed4c7c72587040d377c&q=" + searchTerm;
		return $http.get(searchUrl).then(response => {
			console.log(searchTerm)
			console.log("response is : ", response.data);
			return response.data;
		});
    };
}    
 angular.module("CrispApp").service("recipeService", recipeService);   
