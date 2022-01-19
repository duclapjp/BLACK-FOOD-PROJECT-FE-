import { Component, OnInit } from '@angular/core';
import {Food} from "../../../model/food";
import {User} from "../../../model/User";
import {FoodService} from "../../../service/food.service";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {TokenService} from "../../../service/token.service";
import {Coupon} from "../../../model/coupon";
import {CouponService} from "../../../service/coupon.service";

@Component({
  selector: 'app-restaurant-coupon-create',
  templateUrl: './restaurant-coupon-create.component.html',
  styleUrls: ['./restaurant-coupon-create.component.css']
})
export class RestaurantCouponCreateComponent implements OnInit {
  // @ts-ignore
  coupon: Coupon ={
    name:'',
    restaurantId:0,
  }
  form: any={

  }
  // @ts-ignore
  user: User = {}
  constructor(private couponService:CouponService,
              private route: Router,
              private userService: UserService,
              private tokenStorage: TokenService) { }

  ngOnInit(): void {
    this.getUser();
  }

  createNewCoupon() {
    // @ts-ignore
    this.coupon = {
      name: this.form.name,
      restaurantId: this.user.restaurantId,
    }
    console.log('coupon: ' + JSON.stringify(this.coupon));

    this.couponService.createNewCoupon(this.coupon).subscribe(()=>{
      this.route.navigate(['/restaurant-coupon-list'])
    });
  }

  getUser(){
    this.userService.getUserById(this.tokenStorage.getUserId()).subscribe(user=>{
      this.user = user;
      console.log(user);
      console.log("id:   " + user.restaurantId);
    })
  }

}
