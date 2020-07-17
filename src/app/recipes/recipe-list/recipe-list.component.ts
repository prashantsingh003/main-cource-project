import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  @Output() lastSelectedRecipePass = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This Simply a test','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/carrot-cake.jpg'),
    new Recipe('Another Test Recipe', 'This Simply a test','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/carrot-cake.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  passingSelectedRecipe(recipe:Recipe){
    this.lastSelectedRecipePass.emit(recipe);
  }
}
