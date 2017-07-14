UserController.$inject = ["$stateParams", "usersService", "listService", "recipeService"];
function UserController($stateParams, usersService, listService, recipeService) {
  const vm = this;
  vm.deleteList = deleteList;
  vm.searchRecipe = searchRecipe;
  vm.recipes = [];

  activate();

  function activate() {
    console.log($stateParams)
    usersService.getUser($stateParams.userId).then((res) => {
      console.log(res)
      console.log(res.user)
      vm.user = res.user;
      vm.lists = res.lists;
    });
  }

  function deleteList(listId){ 
    listService.deleteList($stateParams.userId, listId).then((res) =>{
      console.log('List Deleted')

      activate();
    })
  
  }

  function searchRecipe(query) {
    recipeService.searchRecipe(query).then(res => {
      // console.log(res);
      console.log(res.matches);
      vm.recipes = res.matches;
      
    });

  } 

}
export default UserController;
