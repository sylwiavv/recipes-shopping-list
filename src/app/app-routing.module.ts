import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesListComponent} from "./recipes/recipes-list/recipes-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {PostsComponent} from "./posts/posts.component";

const appRoutes: Routes = [
  {path: "", redirectTo: "/recipes", pathMatch: "full"},
  {path: "recipes", component: RecipesComponent},
  {path: "shopping-list", component: ShoppingListComponent},
  {path: "posts", component: PostsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
