import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Params} from "@angular/router";
import {FoodOrderService} from "../../../service/foodOrder.service";
import {FoodOrder} from "../../../model/food-order";
import {User} from "../../../model/User";
import {TokenService} from "../../../service/token.service";
import {UserService} from "../../../service/user.service";
import {RestaurantService} from "../../../service/restaurant.service";
import {Restaurant} from "../../../model/restaurant";
import {Food} from "../../../model/food";

@Component({
  selector: 'app-restaurant-order-detail',
  templateUrl: './restaurant-order-detail.component.html',
  styleUrls: ['./restaurant-order-detail.component.css']
})
export class RestaurantOrderDetailComponent implements OnInit {
  id: number=0;
  // @ts-ignore
  foodOrder: FoodOrder={}

  constructor(private http: HttpClient,
              private activeRoute: ActivatedRoute,
              private foodOrderService: FoodOrderService,
              private tokenService: TokenService,
              private userService:UserService,
              private restaurantService: RestaurantService) {
    this.activeRoute.params.subscribe((params: Params)=>{
      this.id = params['id'];
      this.foodOrderService.getById(this.id).subscribe(foodOrder=>{
        this.foodOrder=foodOrder;
        console.log(foodOrder);
      })
    });
  }

  ngOnInit(): void {
  }
  public getTotalPrice(foods: Food[]){
    let sum = 0;
    foods.forEach(food => {
      sum += food.price
    });
    return sum
  }
}
