const angular = require("angular");

usersService.$inject = ["$http","recipeService"];

function usersService ($http, recipeService) {
	const service = this;

	service.getAllUsers = function () {
		return $http.get("/api/users").then(res => {
			return res.data;
		});
	};

	service.getUser = function (id) {
		return $http.get(`/api/users/${id}`).then(res => {
			return res.data;
		});
	};

	service.saveUser = function (newUser) {
		return $http.post("/api/users", newUser).then(res => {
			return res.data;
		});
	};

	service.editUser = function (id) {
		console.log(userId)
		return $http.patch(`/api/users/${id}`)
	};


	return service;
}

angular.module("CrispApp").service("usersService", usersService);