import {IngredientType} from "./shopping-list.model";
import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  private ingredients: IngredientType[] = [
    new Ingredient("Apple", 5),
    new Ingredient('Tomatoes', 10),
  ]

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
