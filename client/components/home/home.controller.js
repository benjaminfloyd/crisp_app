 HomeController.$inject = ["$stateParams","recipeService"];

  function HomeController($stateParams,recipeService ){
      const vm = this;
      vm.searchTerm = '';

      function activate(){ 

      }

      vm.searchRecipe = function(searchTerm){
        recipeService.searchRecipe(searchTerm)
      }

  //     	vm.addItem = function() {
	// 	vm.items.push(vm.newItem);
	// 	vm.newItem = '';
	// }

  	
    }
  export default HomeController;
  