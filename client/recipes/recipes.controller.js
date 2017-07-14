RecipesController.$inject = ["recipeService","listService", '$auth', '$state', "$stateParams", "$http"];

function RecipesController(recipeService, listService, $auth, $state, $stateParams, $http) {
  const vm = this,
    response = $stateParams.recipes;
  
  vm.user = $auth.user;
 
  vm.recipes = response.matches;
  vm.searchTerm = response.criteria.q;
  console.log(response)

  activate(); 

  function activate() {

    console.log(vm);
  } 

  // vm.saveToNewList = function () {
  //   let userId = $stateParams.userId;
  //   let listId = $stateParams.listId;
  //   listService.saveToNewList(listId, userId)
  //     .then(res => {
  //       vm.favorite = res.data;
  //     })
  //     .catch(res => {
  //     });
  // }

} //close Controller function


export default RecipesController;