import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Restaurant} from "../../../model/restaurant";
import {RestaurantService} from "../../../service/restaurant.service";
import {FoodOrder} from "../../../model/food-order";
import {Food} from "../../../model/food";
import {Payment} from "../../../model/Payment";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-restaurant-order-booking-list',
  templateUrl: './restaurant-order-booking-list.component.html',
  styleUrls: ['./restaurant-order-booking-list.component.css']
})
export class RestaurantOrderBookingListComponent implements OnInit {

  restaurantId = 0;
  // @ts-ignore
  restaurant: Restaurant = {};
  foodOrderList: FoodOrder[] = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private userService: UserService
  ) {
    this.activeRoute.params.subscribe((params: Params)=>{
      this.restaurantId = params['id'];
      this.restaurantService.showFOBookingListOfRes(this.restaurantId).subscribe(fos => {
        this.foodOrderList = fos;
        console.log('fo: ' + this.foodOrderList);
      })
      this.restaurantService.findRestaurantById(this.restaurantId).subscribe(res => {
        this.restaurant = res;
      })
    });
  }

  ngOnInit(): void {
  }
  public getTotalPrice(foods: Food[]) {
    let sum = 0;
    if (foods!= undefined){
      foods.forEach(food => {
        sum += food.price
      });
      return sum
    }
    return sum;
  }

  paymentVerify(event: any) {
    let foId = event.currentTarget.id;
    let userId = event.currentTarget.name;
    console.log('foId: ' +event.currentTarget.id );
    console.log('totalPrice: ' + event.currentTarget.value);
   let payment = {
      totalPrice: event.currentTarget.value
    }
    this.userService.payment(userId,foId,this.restaurantId,payment).subscribe(user => {
    alert("Đơn hàng đã được xác nhận và giao đến khách hàng!");
    window.location.reload();
    })
  }


}
