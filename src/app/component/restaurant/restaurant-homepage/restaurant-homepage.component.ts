import { Component, OnInit } from '@angular/core';
import {FoodService} from "../../../service/food.service";
import {Food} from "../../../model/food";

@Component({
  selector: 'app-restaurant-homepage',
  templateUrl: './restaurant-homepage.component.html',
  styleUrls: ['./restaurant-homepage.component.css']
})
export class RestaurantHomepageComponent implements OnInit {

  foods: Food[] =[]
  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.foodService.findAll().subscribe(foods => {
      this.foods = foods;
      console.log('foods: '+ this.foods);
    })
  }

}
