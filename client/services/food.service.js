const angular = require("angular");

foodService.$inject = ["$http"];

function foodService ($http) {
	const service = this;

	// service.getAllFood = function (listId) {
	// 	return $http.get("/api/users/" + userId + "/lists").then(res => {
	// 		return res.data;
	// 	});
	// };

	service.getFood = function (foodId) {
		return $http.get("/api/users/" + userId + "/lists" + id).then(res => {
			return res;
		});
	};

	service.saveList = function (userId,newList) {
		return $http.post("/api/users/" + userId, newList).then(res => {
			return res;
		});
	};

	return service;
}

angular.module("CrispApp").service("listService", listService);