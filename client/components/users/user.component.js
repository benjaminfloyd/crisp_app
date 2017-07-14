  import userController from "./user.controller";
  import userTemplate from "./user.html";

  const userComponent = {
  	controller: userController,
  	template: userTemplate
  };

  angular.module("CrispApp").component("crispUser",  userComponent);