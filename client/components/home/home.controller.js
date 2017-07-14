 HomeController.$inject = ["$stateParams","recipeService","$state"];

  function HomeController($stateParams,recipeService,$state ){
      const vm = this;
      vm.searchTerm = '';

      function activate(){ 

      }

      vm.searchRecipe = function(){
        console.log(vm.searchTerm)
        recipeService.searchRecipe(vm.searchTerm).then((res) => {
          console.log(res);
          $state.go('recipes', { recipes: res });
        })
      }

  //     	vm.addItem = function() {
	// 	vm.items.push(vm.newItem);
	// 	vm.newItem = '';
	// }

  	
    }
  export default HomeController;
  