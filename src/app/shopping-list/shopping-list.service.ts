import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {    
    ingredientsAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('salt', 1000),
        new Ingredient('water', 4)
    ];

    getIngredients() {
        return this.ingredients.slice();
        
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsAdded.emit(this.ingredients.slice());
    }


}