import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {IngredientType} from "./shopping-list.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientType[] = [
    new Ingredient("Apple", 5),
    new Ingredient('Tomatoes', 10),
  ]

  constructor() {

  }

  onIngredientAdded(ingredient: Ingredient) {
    console.log(ingredient, "ingredient");
    this.ingredients.push(ingredient);
  }

  ngOnInit() {
  }

}
