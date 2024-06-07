import {
  Component,
  OnInit,
  ElementRef,
  ViewChild, OnDestroy
} from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from "@angular/forms";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm
  subscription: Subscription
  editMode = false
  editedItemIndex: number
  editedItem: Ingredient

  constructor(private slService: ShoppingListService) {
    console.log(this.editedItemIndex)
  }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe((index: number) => {
        this.editedItemIndex = index
        this.editMode = true
        this.editedItem = this.slService.getIngredient(index)
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    console.log(this.editedItem, "ngOnDestroy");
  }

  onAddItem(form: NgForm) {
    const value = form.value
    console.log(form, "F");
    const ingName = value.name;
    const ingAmount = value.amount;

    const newIngredient = new Ingredient(ingName, ingAmount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.slService.addIngredient(newIngredient);
    }

    this.shoppingListForm.resetForm()

    console.log(newIngredient, "newIngredient");
  }

  onClear() {
    this.editMode = false
    this.shoppingListForm.reset()
    this.editedItemIndex = null
    console.log(this.editedItemIndex);
  }

  onDelete() {
    this.onClear()
    console.log(this.editedItemIndex)
    this.slService.deleteIngredient(this.editedItemIndex)
  }
}
