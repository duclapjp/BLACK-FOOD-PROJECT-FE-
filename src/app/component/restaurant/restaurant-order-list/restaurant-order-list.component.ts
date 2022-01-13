import { Component, OnInit } from '@angular/core';
import {FoodOrder} from "../../../model/food-order";
import {FoodOrderService} from "../../../service/foodOrder.service";
import {TokenService} from "../../../service/token.service";
import {Food} from "../../../model/food";
import {User} from "../../../model/User";
import {UserService} from "../../../service/user.service";
import {user} from "@angular/fire/auth";

@Component({
  selector: 'app-restaurant-order-list',
  templateUrl: './restaurant-order-list.component.html',
  styleUrls: ['./restaurant-order-list.component.css']
})
export class RestaurantOrderListComponent implements OnInit {
  orderList: FoodOrder[] =[];
  id:number =0
  totalP: number=0;
  // @ts-ignore
  user: User = {}
  constructor(private foodOrderService: FoodOrderService,
              private tokenService: TokenService,
              private userService: UserService) {
    this.getAllOrder();
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
  getAllOrder(){
    this.id= this.tokenService.getUserId();
    console.log(this.id);
    this.foodOrderService.getAllOrder(this.id).subscribe(orderList=>{
     this.orderList = orderList;
     console.log(this.orderList);
   })
  }
  getCurrentUser(){
    this.userService.getUserById(this.tokenService.getUserId()).subscribe(user => {
      this.user = user;
    })
  }
}
