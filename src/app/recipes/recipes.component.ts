import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipesService} from "./recipes.server";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit{
  // @Input() selectedRecipe: Recipe
  selectedRecipe: Recipe

  constructor(private recipeService: RecipesService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
      (recipe: Recipe) =>
      {this.selectedRecipe = recipe
      })
  }
}
