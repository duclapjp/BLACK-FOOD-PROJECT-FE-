import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {User} from "../../../model/User";
import {UserService} from "../../../service/user.service";
import {FoodOrder} from "../../../model/food-order";
import {Food} from "../../../model/food";
import {RestaurantService} from "../../../service/restaurant.service";
import {Restaurant} from "../../../model/restaurant";

@Component({
  selector: 'app-user-order-detail',
  templateUrl: './user-order-detail.component.html',
  styleUrls: ['./user-order-detail.component.css']
})
export class UserOrderDetailComponent implements OnInit {

  // @ts-ignore
  user: User= {};
  // @ts-ignore
  foodOrder: FoodOrder = {}
  // @ts-ignore
  restaurant: Restaurant ={}
  constructor(
    private activatedRoute: ActivatedRoute,
   private userService: UserService,
    private restaurantService: RestaurantService,
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      let userId = params['id'];
      this.userService.getUserById(userId).subscribe(user => {
        this.user = user;
        this.userService.showCurrentFO().subscribe(fo => {
          this.foodOrder = fo;
          console.log("fo: " + JSON.stringify(this.foodOrder));
          console.log("foods: " + JSON.stringify(this.foodOrder.foodList));
          this.foodOrder.foodList.forEach(food => {
            let resId = food.restaurantId;
            this.restaurantService.findRestaurantById(resId).subscribe(res => {
              this.restaurant = res;
            })
          })
        })
      })
    })
  }


  ngOnInit(): void {
  }
checkCancel(foodOrder: FoodOrder){
    if (foodOrder.generalStatus.id == 5){
      return true;
    }
    return false;
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
  checkBookingStatus(foodOrder: FoodOrder){
    if (foodOrder.generalStatus.id == 5){
      return true;
    }
    return false
  }
  checkFo(foodOrder: FoodOrder){
    if (foodOrder.id == null){
      return true
    }
    return false
  }

  bookingOrder() {
    this.userService.bookingOrder().subscribe(user => {
      alert('Đặt hàng thành công!');
      window.location.reload();
    })
  }

  cancelOrder() {
    this.userService.cancelOrder().subscribe(user => {
      alert('Hủy đặt hàng thành công');
      window.location.reload();

    })
  }
}
