import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../service/token.service";
import {FoodOrderService} from "../../../service/foodOrder.service";
import {FoodOrder} from "../../../model/food-order";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/User";
import {Router} from "@angular/router";
import {Food} from "../../../model/food";

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {
  id:number=0;
  orderList: FoodOrder [] =[];
  // @ts-ignore
  user: User ={}
  constructor(private tokenService: TokenService,
              private foodOrderService: FoodOrderService,
              private userService: UserService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.getUser();
    this.getAllOrder();
  }
  getAllOrder(){
    this.id= this.tokenService.getUserId();
    console.log(this.id);
    this.foodOrderService.getAllOrderByUser_Id(this.id).subscribe(orderList=>{
      this.orderList = orderList;
      console.log('oders: ' + JSON.stringify(this.orderList));
    });
  }
  getUser(){
    let userId = this.tokenService.getUserId();
    this.userService.getUserById(userId).subscribe(user=>{
      this.user = user;
    });
  }
  logout() {
    this.tokenService.logout();
    this.router.navigate(['/']);
  }
  public getTotalPrice(foods: Food[]){
    let sum = 0;
    foods.forEach(food => {
      sum += food.price
    });
    return sum
  }
}
