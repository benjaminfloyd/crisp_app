 HomeController.$inject = ["$stateParams","recipeService"];

  function HomeController($stateParams,recipeService ){
      const vm = this;
      vm.searchTerm = '';

      function activate(){ 

      }

      vm.searchRecipe = function(){
        console.log(vm.searchTerm)
        recipeService.searchRecipe(vm.searchTerm)
      }

  //     	vm.addItem = function() {
	// 	vm.items.push(vm.newItem);
	// 	vm.newItem = '';
	// }

  	
    }
  export default HomeController;
  