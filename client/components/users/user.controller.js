UserController.$inject = ["$stateParams", "usersService"];
function UserController($stateParams, usersService) {
  const vm = this;

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


}
export default UserController;
