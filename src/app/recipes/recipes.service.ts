import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe("A Hello", "Hello", "https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=980:*", [new Ingredient("Raspberries", 1), new Ingredient("Maple syrup", 2)]),
    new Recipe("A test", "Simple test", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn_fried_rice-2481925.jpg?quality=90&resize=440,400:*", [new Ingredient("Shrimp", 2),  new Ingredient("Sugar snap peas", 23)]),
  ]

  getRecipes() {
    return this.recipes.slice();
  }
}
