import {Component, inject, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[]

  constructor(private recipeService: RecipesService, private router: Router, private route: ActivatedRoute) {
  }

  // private recipeService = inject(RecipesService)

  // onRecipeSelected(recipeElement: Recipe) {
  //   this.recipeWasSelected.emit(recipeElement)
  // }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }

  onNewRecipe() {
    console.log(this.route, this.router)
    this.router.navigate(["new"], {relativeTo: this.route})
  }
}
