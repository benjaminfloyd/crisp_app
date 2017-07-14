import RecipeController from "./recipe.controller";
import RecipeTemplate from "./recipe.html";

  const recipeComponent = {
  	controller: RecipeController,
  	template: RecipeTemplate
  };

  angular.module("CrispApp").component("recipeShow", recipeComponent);