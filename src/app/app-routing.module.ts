import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesListComponent} from "./recipes/recipes-list/recipes-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {PostsComponent} from "./posts/posts.component";
import {RecipeStartComponent} from "./recipes/recipes-list/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";

const appRoutes: Routes = [
  {path: "", redirectTo: "/recipes", pathMatch: "full"},
  {path: "recipes", component: RecipesComponent, children: [
      {path: "", component: RecipeStartComponent},
      {path: ":id", component: RecipeDetailComponent}
    ]},
  {path: "shopping-list", component: ShoppingListComponent},
  {path: "posts", component: PostsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
