 UserController.$inject = ["$stateParams", "usersService"];
  function UserController($stateParams, usersService){
      const vm = this;

      activate();

      function activate(){
        console.log($stateParams)
          usersService.getUser($stateParams.id).then(res =>{
            debugger
              vm.user = res.user;
              vm.list = res.list;
              console.log(res.list);
          });
      }
  	
    }
  export default UserController;
  