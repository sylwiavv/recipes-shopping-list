import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipesService} from "../../recipes.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe
  // @Output() selectedRecipe = new EventEmitter<void>()

  constructor(private recipeService: RecipesService) {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)
    // this.selectedRecipe.emit(selectedRecipe)
  }
}
