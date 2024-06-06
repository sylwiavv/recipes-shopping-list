import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import {HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import {UserAvatarComponent} from "./posts/post-item/user-avatar/user-avatar.component";
import { CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BasicHighLightDirective} from "./directives/basicHighLightDirective/basicHighLightDirective";
import {BetterBasicHighLightDirective} from "./directives/basicHighLightDirective/betterBasicHighLightDirective";
import {
  BetterBasicHighLightDirectiveWithHostBinding
} from "./directives/basicHighLightDirective/betterBasicHighLightDirectiveWithHostBinding";
import {DropdownDirective} from "./directives/dropdown/dropdown.directive";
import {ShoppingListService} from "./shopping-list/shoppingListService";
import {AppRoutingModule} from "./app-routing.module";
import { RecipeStartComponent } from './recipes/recipes-list/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipesListComponent,
    RecipeItemComponent,
    PostsComponent,
    UserAvatarComponent,
    PostItemComponent,
    BasicHighLightDirective,
    BetterBasicHighLightDirective,
    BetterBasicHighLightDirectiveWithHostBinding,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    PageNoFoundComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
