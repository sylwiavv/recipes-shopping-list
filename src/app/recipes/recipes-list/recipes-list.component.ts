import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test", "Simple test", "https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=980:*"),
    new Recipe("A test", "Simple test", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn_fried_rice-2481925.jpg?quality=90&resize=440,400:*")
  ]

  constructor() {
  }

  ngOnInit() {

  }

}
