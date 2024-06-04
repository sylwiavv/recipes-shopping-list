import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shoppingListService";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService ) {

  }

  ngOnInit() {
  }

  onClean() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.onIngredientAdded(newIngredient)

    this.onClean()
  }
}
