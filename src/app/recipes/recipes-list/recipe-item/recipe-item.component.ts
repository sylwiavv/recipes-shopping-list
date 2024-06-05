import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe
  @Input() index: number
  // @Output() selectedRecipe = new EventEmitter<void>()
  //
  // constructor(private recipeService: RecipesService) {
  // }

  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe)
  //   // this.selectedRecipe.emit(selectedRecipe)
  // }
}
