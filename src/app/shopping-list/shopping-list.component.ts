import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {IngredientType} from "./shopping-list.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientType[] = [new Ingredient("Apple", 5)]
  constructor() {

  }

  ngOnInit() {
  }

}
