import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {IngredientType} from "../../shopping-list/shopping-list.model";
import {ShoppingListService} from "../../shopping-list/shoppingListService";
import {RecipesService} from "../recipes.service";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe
  ingredients: IngredientType[]

  // constructor(private shoppingListService: ShoppingListService ) {}
  constructor(private recipeService: RecipesService ) {}

  ngOnInit() {
    // this.ingredients = this.shoppingListService.getIngredients()
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToTheShoppingList(this.recipe.ingredients)
  }
}
