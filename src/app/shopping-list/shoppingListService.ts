import {IngredientType} from "./shopping-list.model";
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>()
  startedEditing = new Subject<number>()

  private ingredients: IngredientType[] = [
    new Ingredient("Apple", 5),
    new Ingredient('Tomatoes', 10),
  ]

  getIngredients() {
    return this.ingredients.slice();
  }


  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient)
    // }
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

}
