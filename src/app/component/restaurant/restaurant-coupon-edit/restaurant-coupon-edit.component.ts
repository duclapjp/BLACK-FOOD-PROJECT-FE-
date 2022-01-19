import { Component, OnInit } from '@angular/core';
import {Food} from "../../../model/food";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FoodService} from "../../../service/food.service";
import {Coupon} from "../../../model/coupon";
import {CouponService} from "../../../service/coupon.service";

@Component({
  selector: 'app-restaurant-coupon-edit',
  templateUrl: './restaurant-coupon-edit.component.html',
  styleUrls: ['./restaurant-coupon-edit.component.css']
})
export class RestaurantCouponEditComponent implements OnInit {

  couponId: number = 0;
  // @ts-ignore
  coupon : Coupon = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private couponService: CouponService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.couponId = params['id'];
      this.couponService.findById(this.couponId).subscribe(coupon => {
        this.coupon = coupon;
        console.log('coupon: ' + JSON.stringify(this.coupon));
      })

    })
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.couponService.update(this.coupon).subscribe(coupon => {
      this.coupon = coupon;
      // console.log('foodUpdate: ' + JSON.stringify(this.food));
      this.router.navigate(['/restaurant-coupon-list']);
    });
  }

  // // @ts-ignore
  // uploadFile(event) {
  //   this.food.image = event;
  // }
}
