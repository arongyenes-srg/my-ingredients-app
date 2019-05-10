import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'first recipe', 
            'nice', 
            'https://images.media-allrecipes.com/userphotos/600x600/1124412.jpg', 
            [
                new Ingredient('meat', 5),
                new Ingredient('bread', 68)
            ]),
        new Recipe(
            'second recipe', 
            'well', 
            'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/5ad0b4c3ae08b51e0e19ff34-14952d03.jpg',
            [
                new Ingredient('soap', 79),
                new Ingredient('milk', 64)
            ]),
        new Recipe(
            'third recipe', 
            'rare', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOL580uoMPLXi9U8dUEeBfyHi4KmnbnRIQKuAS87cmgjKWqjQ1A',
            [
                new Ingredient('strawberry', 15),
                new Ingredient('cucumber', 568),
                new Ingredient('cocoa', 1)
            ]),
        new Recipe(
            'fourth recipe', 
            'lethal', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMp5b4aDO-LOYYsB1taizB_Crs1A-VTv7Z0rq6vgXwKHisiAan',
            [
                new Ingredient('babapiskóta', 5),
                new Ingredient('pfankuchen', 168)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}