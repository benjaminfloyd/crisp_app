RecipesController.$inject = ["recipeService","listService", '$auth', '$state', "$stateParams", "$http"];

function RecipesController(recipeService, listService, $auth, $state, $stateParams, $http) {
  const vm = this;
    // response = $stateParams.recipes;
  
  vm.user = $auth.user;
 
  vm.recipes = [];
  // vm.searchTerm = response.criteria.q;
  // console.log(response)
  console.log($stateParams.recipes);

  activate(); 

  function activate() {
    vm.recipes = $stateParams.recipes.matches;
    $stateParams.recipes.matches.map(function(match) {
      var url = match.imageUrlsBySize[90];
      var url = url.slice(0, -4) + 500;
      console.log(url);
      match.imageUrlsBySize[90] = url;
    });
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