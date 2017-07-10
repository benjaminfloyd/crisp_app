  import loginController from "./login.controllers";
  import usersTemplate from "./login.html";

  const usersComponent = {
  	controller: loginController,
  	template: usersTemplate
  };

  angular.module("CrispApp").component("crispLogin",  usersComponent);