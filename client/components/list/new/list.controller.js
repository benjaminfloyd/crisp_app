NewListController.$inject = ["$stateParams", "$http", "listService", "$state","$auth"];

function NewListController($stateParams, $http, listService, $state, $auth) {
    var vm = this;
    vm.user = $auth.user;
	vm.items = [];
	vm.addItem = addItem;
	vm.newItem = '';
	vm.newList = {};

	vm.saveList = function () {
		listService.saveList(vm.user.id, vm.items).then((res) => {
      		$state.go("home");
		});
	};

	vm.addItem = function() {
		vm.items.push(vm.newItem);
		vm.newItem = '';
	}

	function addItem(){

	}

}

export default NewListController;