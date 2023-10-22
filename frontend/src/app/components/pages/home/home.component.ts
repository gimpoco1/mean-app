import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/shared/models/food';
import { FoodService } from 'src/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
foods:Food[] = [];
constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
  activatedRoute.params.subscribe((params)=>{
    if(params.searchTerm)
    this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
  else
  this.foods = foodService.getAll()
  })
}
}
