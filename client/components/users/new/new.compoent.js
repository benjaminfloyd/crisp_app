  import loginController from "./new.controller";
  import usersTemplate from "./new.html";

  const usersComponent = {
  	controller: loginController,
  	template: usersTemplate
  };

  angular.module("CrispApp").component("crispLogin",  usersComponent);