import { Component, OnInit } from '@angular/core';
import {Food} from "../../../model/food";
import {FoodService} from "../../../service/food.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RestaurantService} from "../../../service/restaurant.service";
import {Restaurant} from "../../../model/restaurant";

@Component({
  selector: 'app-restaurant-delete-food',
  templateUrl: './restaurant-delete-food.component.html',
  styleUrls: ['./restaurant-delete-food.component.css']
})
export class RestaurantDeleteFoodComponent implements OnInit {
  // @ts-ignore
  food: Food={}
  id: number=0;
  resId = 0;
  // @ts-ignore
  restaurant: Restaurant = {}
  constructor(private foodService: FoodService,
              private activeRouter:ActivatedRoute,
              private route: Router,
              private restaurantService: RestaurantService) {
    this.activeRouter.params.subscribe((param: Params)=>{
      this.id=param['id']
     this.foodService.findById(this.id).subscribe(food=>{
       this.food=food;
       this.resId = food.restaurantId;
       this.restaurantService.findRestaurantById(this.resId).subscribe(res => {
         this.restaurant = res;
       })
       console.log(this.food);
     })
    })
  }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.foodService.delete(id).subscribe(()=>{
      this.route.navigate(['/restaurant-homepage/'+this.resId]);
    });
  }

  backHomePage() {
    this.route.navigate(['/restaurant-homepage/'+this.resId])
  }
}
