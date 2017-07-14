import UserSessionsController from "./user_sessions.controller";
import UserSessionsTemplate from './new.html';

const UserSessionsComponent = {
  controller: UserSessionsController,
  template: UserSessionsTemplate
};

angular.module("CrispApp").component("signIn", UserSessionsComponent);