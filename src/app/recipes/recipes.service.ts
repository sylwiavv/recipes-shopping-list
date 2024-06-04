import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe("A Hello", "Hello", "https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=980:*"),
    new Recipe("A test", "Simple test", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn_fried_rice-2481925.jpg?quality=90&resize=440,400:*"),
    new Recipe("Flan Recipe", "This Flan recipe has a sweet and creamy custard center with a golden crown of caramel that pours over the cake as you slide off the pan. This is a make-ahead dessert (it requires some chilling in the refrigerator)!", "https://natashaskitchen.com/wp-content/uploads/2023/04/Flan-Recipe-2.jpg")
  ]

  getRecipes() {
    return this.recipes.slice();
  }
}
