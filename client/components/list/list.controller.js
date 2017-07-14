ListController.$inject = ["listService", '$auth', '$state', "$stateParams", "$http"];

function ListController(listService, $auth, $state, $stateParams, $http) {
  const vm = this;
  console.log($auth.user)
  vm.user = $auth.user
  vm.list = {
    list: $stateParams.list
  };
  console.log(vm.list);

  activate(); 

  function activate() {
  } 

  vm.saveToNewList = function () {
    let userId = $stateParams.userId;
    let listId = $stateParams.listId;
    listService.saveToNewList(listId, userId)
      .then(res => {
        vm.favorite = res.data;
      })
      .catch(res => {
        console.log(res);
      });
  }

  vm.deleteFromUserList = function () {
    listService.deleteFromUserList(vm.list.id)
      .then(res => {
        console.log(res.data.message);
      })
      .catch(res => {
        console.log('error deleting list');
        console.log(res.data.error);
      })
  }


} //close Controller function


export default ListController;