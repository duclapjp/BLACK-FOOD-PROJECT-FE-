import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {Coupon} from "../model/coupon";

const API_LOCAL = `${environment.API_LOCAL}`

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient) { }

  createNewCoupon(coupon: Coupon): Observable<Coupon> {
    return this.http.post<Coupon>(API_LOCAL + 'coupons', coupon);
  }


  findAll(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(API_LOCAL + 'coupons');
  }

  findById(id: number): Observable<Coupon> {
    return this.http.get<Coupon>(API_LOCAL + 'coupons/' + id);
  }


  update(coupon: Coupon): Observable<Coupon> {
    return this.http.put<Coupon>(API_LOCAL + 'coupons', coupon);
  }

  delete(id: number) {
    return this.http.delete(API_LOCAL + 'coupons/' + id);
  }

  showAllByRestaurantId(id: number): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(API_LOCAL+'coupons/restaurant/'+ id);
  }
}
