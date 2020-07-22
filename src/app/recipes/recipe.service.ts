import { Injectable, EventEmitter } from "@angular/core";

import { Recipe} from './recipe.model';

@Injectable()

export class RecipeService{
    selectedRecipe = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This Simply a test','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/carrot-cake.jpg'),
        new Recipe('Another Test Recipe', 'This Simply a test','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/carrot-cake.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}