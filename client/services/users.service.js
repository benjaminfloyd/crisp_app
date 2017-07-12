const angular = require("angular");

usersService.$inject = ["$http"];

function usersService ($http) {
	const service = this;

	service.getAllUsers = function () {
		return $http.get("/api/users").then(res => {
			return res.data;
		});
	};

	service.getUser = function (id) {
	
		return $http.get("/api/users/" + id).then(res => {
		
			return res;
		});
	};

	service.saveUser = function (newUser) {
		return $http.post("/api/users", newUser).then(res => {
			return res.data;
		});
	};

	return service;
}

angular.module("CrispApp").service("usersService", usersService);