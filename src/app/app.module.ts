import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipes/recipes.component';
import { RecipiesListComponent } from './recipes/recipes-list/recipies-list.component';
import { RecipieItemComponent } from './recipes/recipes-list/recipe-item/recipie-item.component';
import { RecipieDetailComponent } from './recipes/recipie-detail/recipie-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipiesListComponent,
    RecipieItemComponent,
    RecipieDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
