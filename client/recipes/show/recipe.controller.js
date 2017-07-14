RecipeController.$inject = ["recipeService","listService", '$auth', '$state', "$stateParams", "$http"];

function RecipeController(recipeService, listService, $auth, $state, $stateParams, $http) {
  const vm = this;
  var response = $stateParams.recipe;
  vm.user = $auth.user;
  vm.recipe = response;
  console.log($stateParams);

  activate(); 

  function activate() {
    console.log(vm);
  }
  
}

export default RecipeController;