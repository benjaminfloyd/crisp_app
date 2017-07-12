ListController.$inject = ["listService", '$auth', '$state', "$stateParams", "$http"];

function ListController(listService, $auth, $state, $stateParams, $http) {
  const vm = this;
  vm.list = {
    list: $stateParams.list
  };
  console.log(vm.list);

  activate(); //run when the page loads

  function activate() {

  } //close Activate function

  vm.saveToFavorites = function () {
    let userId = $stateParams.userId;
    let listId = $stateParams.listId;
    listService.saveToFavorites(listId, userId)
      .then(res => {
        vm.favorite = res.data;
      })
      .catch(res => {
        console.log(res);
      });
  }

  vm.deleteFromFavorites = function () {
    listService.deleteFromFavorites(vm.favorite.id)
      .then(res => {
        console.log(res.data.message);
      })
      .catch(res => {
        console.log('error deleting favorite');
        console.log(res.data.error);
      })
  }


} //close Controller function


export default ListController;