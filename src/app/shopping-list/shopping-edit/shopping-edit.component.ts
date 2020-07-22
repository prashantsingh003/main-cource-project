import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') ingredientName:ElementRef;
  @ViewChild('inputAmount') ingredientAmount:ElementRef;

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(){
    const ingName = this.ingredientName.nativeElement.value;
    const ingAmount = this.ingredientAmount.nativeElement.value;
    const ingredient = new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(ingredient);
  }
}
