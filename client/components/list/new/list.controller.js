NewListController.$inject = ["$stateParams", "$http", "listService", "$state","$auth"];

function NewListController($stateParams, $http, listService, $state, $auth) {
    var vm = this;
    vm.user = $auth.user
	vm.list = {};
	vm.items = [];
	vm.newItem = '';

	vm.saveList = function () {
		listService.saveList(vm.list).then((res) => {
      $state.go("home");
		});
	};

	vm.addItem = function() {
		vm.items.push(vm.newItem);
		vm.newItem = '';
	}
}

export default NewListController;