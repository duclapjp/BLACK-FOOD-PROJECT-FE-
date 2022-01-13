import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FoodOrder} from "../../../model/food-order";
import {FoodOrderService} from "../../../service/foodOrder.service";
import {ActivatedRoute} from "@angular/router";
import {TokenService} from "../../../service/token.service";
import {Food} from "../../../model/food";

@Component({
  selector: 'app-restaurant-order-list',
  templateUrl: './restaurant-order-list.component.html',
  styleUrls: ['./restaurant-order-list.component.css']
})
export class RestaurantOrderListComponent implements OnInit {
  orderList: FoodOrder[] =[]
  food: Food[]=[];
  id:number =0
  constructor(private foodOrderService: FoodOrderService,
              private tokenService: TokenService) {
    this.getAllOrder();
  }

  ngOnInit(): void {

  }
  getAllOrder(){
    this.id= this.tokenService.getUserId();
    console.log(this.id);
    this.foodOrderService.getAllOrder(this.id).subscribe(orderList=>{
     this.orderList = orderList;
     console.log(this.orderList);
   })
  }
}
