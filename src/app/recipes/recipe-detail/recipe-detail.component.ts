import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {IngredientType} from "../../shopping-list/shopping-list.model";
import {RecipesService} from "../recipes.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe
  ingredients: IngredientType[]
  id: number

  // constructor(private shoppingListService: ShoppingListService ) {}
  constructor(private recipeService: RecipesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id)
      })
    // this.ingredients = this.shoppingListService.getIngredients()
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToTheShoppingList(this.recipe.ingredients)
  }
}
