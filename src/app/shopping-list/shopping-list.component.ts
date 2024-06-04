import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {IngredientType} from "./shopping-list.model";
import {ShoppingListService} from "./shoppingListService";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientType[]

  constructor(private shoppingListService: ShoppingListService ) {}

  // onIngredientAdded(ingredient: Ingredient) {
  //   console.log(ingredient, "ingredient");
  //   this.ingredients.push(ingredient);
  // }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()

    this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    })
  }
}
