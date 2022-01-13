import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FoodOrder} from "../model/food-order";

@Injectable({
  providedIn: 'root'
})
export class FoodOrderService {

  constructor(private http: HttpClient) {
  }
  getAllOrder(id: number): Observable<FoodOrder[]> {

    return this.http.get<FoodOrder[]>(`http://localhost:8080/foodOrders/orderList/${id}`);
  }
}
