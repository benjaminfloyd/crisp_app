import RecipesController from "./recipes.controller";
import RecipesTemplate from "./recipes.html";

  const recipesComponent = {
  	controller: RecipesController,
  	template: RecipesTemplate
  };

  angular.module("CrispApp").component("recipes", recipesComponent);