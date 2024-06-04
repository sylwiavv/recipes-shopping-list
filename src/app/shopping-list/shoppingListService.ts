import {IngredientType} from "./shopping-list.model";
import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients: IngredientType[] = [
    new Ingredient("Apple", 5),
    new Ingredient('Tomatoes', 10),
  ]

  getIngredients() {
    return this.ingredients.slice();
  }
}
