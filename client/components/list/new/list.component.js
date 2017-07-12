import newListController from './list.controller';
import newListTemplate from './new.html';

const newListComponent = {
  controller: newListController,
  template: newListTemplate
}

angular.module('CrispApp').component('newList', newListComponent);