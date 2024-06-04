import {Component, inject, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[]


  constructor(private recipeService: RecipesService) {
  }

   // private recipeService = inject(RecipesService)

  // onRecipeSelected(recipeElement: Recipe) {
  //   this.recipeWasSelected.emit(recipeElement)
  // }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }
}
