import { Component, OnInit } from '@angular/core';
import {FoodOrder} from "../../../model/food-order";
import {FoodOrderService} from "../../../service/foodOrder.service";
import {TokenService} from "../../../service/token.service";
import {Food} from "../../../model/food";
import {User} from "../../../model/User";
import {UserService} from "../../../service/user.service";
import {user} from "@angular/fire/auth";
import {Restaurant} from "../../../model/restaurant";
import {RestaurantService} from "../../../service/restaurant.service";

@Component({
  selector: 'app-restaurant-order-list',
  templateUrl: './restaurant-order-list.component.html',
  styleUrls: ['./restaurant-order-list.component.css']
})
export class RestaurantOrderListComponent implements OnInit {
  id:number =0
  totalP: number=0;
  // @ts-ignore
  restaurant: Restaurant={};
  // @ts-ignore
  user: User = {}
  constructor(private foodOrderService: FoodOrderService,
              private tokenService: TokenService,
              private userService: UserService,
              private restaurantService: RestaurantService) {

  }

  ngOnInit(): void {
    this.getCurrentUser();
  }
 public getTotalPrice(foods: Food[]){
let sum = 0;
    foods.forEach(food => {
      sum += food.price
    });
    return sum
  }
  getRestaurant(){
    this.restaurantService.findRestaurantById(this.user.restaurantId).subscribe(restaurant=>{
      this.restaurant = restaurant;
    })
  }
  getCurrentUser(){
    this.userService.getUserById(this.tokenService.getUserId()).subscribe(user => {
      this.user = user;
      this.getRestaurant();
      console.log(`resId`+user.restaurantId);
    })
  }
}
