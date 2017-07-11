 UsersController.$inject = ['$auth'];
  function UsersController($auth){
  	var vm = this;
	  vm.handleLoginBtnClick = function() {
      $auth.submitRegistration(vm.registrationForm)
        .then(function(resp) {
          console.log(resp)
          // handle success response
        })
        .catch(function(resp) {
          console.log(resp)
          // handle error response
        });
    };
  }
  export default UsersController;
  