import { Component, OnInit } from '@angular/core';
import {Food} from "../../../model/food";
import {FoodService} from "../../../service/food.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Coupon} from "../../../model/coupon";
import {CouponService} from "../../../service/coupon.service";

@Component({
  selector: 'app-restaurant-coupon-delete',
  templateUrl: './restaurant-coupon-delete.component.html',
  styleUrls: ['./restaurant-coupon-delete.component.css']
})
export class RestaurantCouponDeleteComponent implements OnInit {
  // @ts-ignore
  coupon: Coupon={}
  id: number = 0;
  constructor(private couponService: CouponService,
              private activeRouter:ActivatedRoute,
              private route: Router) {
    this.activeRouter.params.subscribe((param: Params)=>{
      this.id = param['id']
      this.couponService.findById(this.id).subscribe(coupon=>{
        this.coupon=coupon;
        console.log(this.coupon);
      })
    })
  }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.couponService.delete(id).subscribe(()=>{
      this.route.navigate(['/restaurant-coupon-list'])
    });
  }

  backShowListCoupon() {
    this.route.navigate(['/restaurant-coupon-list'])
  }
}
