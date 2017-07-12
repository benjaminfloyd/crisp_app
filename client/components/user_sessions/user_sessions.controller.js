UserSessionsController.$inject = ['$auth', '$state'];

function UserSessionsController($auth, $state){
  var vm = this;
  console.log('hello');
  activate();

  function activate(){
  }

  vm.handleLoginBtnClick = function(loginForm) {
      $auth.submitLogin(loginForm)
        .then(function(response) {
          // handle success response
          vm.current_user_id = response.id;
          console.log('successful login');
          $state.go('home');
        })
        .catch(function(response) {
          // handle error response
          console.log('error logging in: ');
          console.log(response);
        });
    };


}
export default UserSessionsController;