const angular = require("angular");

listService.$inject = ["$http"];

function listService ($http) {
	const service = this;

	service.getAllList = function (userId) {
		return $http.get("/api/users/" + userId + "/lists").then(res => {
			return res.data;
		});
	};

	service.getList = function (userId) {
		return $http.get("/api/users/" + userId + "/lists" + id).then(res => {
			return res;
		});
	};

	service.saveList = function (userId, newList) {
		return $http.post("/api/users/" + userId + "/lists", newList).then(res => {
			// return res.data;
			console.log(res);
			var list = res.data;
			return $http.post(`/lists/${list.id}/foods`, newList)
			.then(response => {
				return response.data;
			});
			// return res.data;
		});
	};

	return service;
}

angular.module("CrispApp").service("listService", listService);