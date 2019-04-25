import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('first recipe', 'nice', 'https://images.media-allrecipes.com/userphotos/600x600/1124412.jpg'),
    new Recipe('second recipe', 'well', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/5ad0b4c3ae08b51e0e19ff34-14952d03.jpg'),
    new Recipe('third recipe', 'rare', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOL580uoMPLXi9U8dUEeBfyHi4KmnbnRIQKuAS87cmgjKWqjQ1A'),
    new Recipe('fourth recipe', 'lethal', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMp5b4aDO-LOYYsB1taizB_Crs1A-VTv7Z0rq6vgXwKHisiAan')
  ];

  constructor() { }

  ngOnInit() {
  }

}
