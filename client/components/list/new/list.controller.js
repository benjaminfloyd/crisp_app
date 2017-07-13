NewListController.$inject = ["$stateParams", "$http", "listService", "$state","$auth","recipeService"];

function NewListController($stateParams, $http, listService, $state, $auth, recipeService) {
    var vm = this;
    vm.user = $auth.user;
	vm.items = [];
	vm.addItem = addItem;
	vm.newItem = '';
	vm.newList = {};
	vm.searchTerm = '';

	vm.saveList = function () {
		listService.saveList(vm.user.id, vm.items).then((res) => {
      		$state.go("home");
		});
	};

	vm.addItem = function() {
		vm.items.push(vm.newItem);
		vm.newItem = '';
	};

	function addItem(){

	};

	vm.searchRecipe = function(){
        console.log(vm.searchTerm)
        recipeService.searchRecipe(vm.searchTerm)
    }

}

export default NewListController;