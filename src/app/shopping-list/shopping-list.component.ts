import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {IngredientType} from "./shopping-list.model";
import {ShoppingListService} from "./shoppingListService";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IngredientType[]
  private subscription: Subscription

  constructor(private shoppingListService: ShoppingListService ) {}

  // onIngredientAdded(ingredient: Ingredient) {
  //   console.log(ingredient, "ingredient");
  //   this.ingredients.push(ingredient);
  // }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()

    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
