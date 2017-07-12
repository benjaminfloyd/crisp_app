const angular = require("angular");

usersService.$inject = ["$http"];

function usersService ($http) {
	const service = this;

	service.getAllUsers = function () {
		return $http.get("/user").then(res => {
			return res.data;
		});
	};

	service.getUser = function (id) {
	
		return $http.get("/user/" + id).then(res => {
		
			return res;
		});
	};

	service.saveUser = function (newUser) {
		return $http.post("/user", newUser).then(res => {
			return res.data;
		});
	};

	return service;
}

angular.module("CrispApp").service("usersService", usersService);