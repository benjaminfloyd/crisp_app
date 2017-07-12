import ListController from "./list.controller";
import ListTemplate from "./list.html";

  const listComponent = {
  	controller: ListController,
  	template: ListTemplate
  };

  angular.module("CrispApp").component("userList", listComponent);