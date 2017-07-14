import navController from "./nav.controller";
import navTemplate from './nav.html';

const navComponent = {
  controller: navController,
  template: navTemplate
};

angular.module("CrispApp").component("crispNav", navComponent);