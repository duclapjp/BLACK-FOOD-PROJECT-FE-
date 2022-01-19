import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/User";
import {TokenService} from "../../../service/token.service";
import {UserService} from "../../../service/user.service";
import {CouponService} from "../../../service/coupon.service";
import {Coupon} from "../../../model/coupon";

@Component({
  selector: 'app-restaurant-coupon-list',
  templateUrl: './restaurant-coupon-list.component.html',
  styleUrls: ['./restaurant-coupon-list.component.css']
})
export class RestaurantCouponListComponent implements OnInit {
  userId: number = 0;
  restaurantId: number = 0;
  // @ts-ignore
  user: User = {}
  coupons: Coupon[] = []
  constructor( private tokenService: TokenService,
               private userService: UserService,
               private couponService: CouponService) { }

  ngOnInit(): void {
    this.getCurrentUserId();
    this.loadData();
  }

  loadData() {
    this.userService.getUserById(this.userId).subscribe(user => {
      this.user = user;
      console.log("user: " + this.user)
      this.restaurantId = this.user.restaurantId;
      console.log("resId:" + this.restaurantId);
      this.couponService.showAllByRestaurantId(this.restaurantId).subscribe(coupons => {
        this.coupons = coupons;
        console.log('coupons: ' + this.coupons);
      });
    });
  }

  getCurrentUserId() {
    this.userId = this.tokenService.getUserId();
    console.log('userId o token: ' + this.userId);
  }

}
