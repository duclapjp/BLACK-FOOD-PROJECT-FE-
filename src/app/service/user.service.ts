import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {User} from "../model/User";
import {Purchase} from "../model/Purchase";
import {FoodOrder} from "../model/food-order";
import {Food} from "../model/food";
import {Payment} from "../model/Payment";
const API_LOCAL = `${environment.API_LOCAL}`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient
  ) { }


  getUserById(id: number): Observable<User>{
return this.http.get<User>(API_LOCAL+'users/'+id);
  }
  updateUser(user: User): Observable<User>{
    return this.http.put<User>(API_LOCAL+'users',user);
  }
  purchase(purchase: Purchase):Observable<any>{
    return this.http.put(API_LOCAL+'users/purchase',purchase);
  }
  addOrder(foodOrder: FoodOrder): Observable<User>{
    return this.http.put<User>(API_LOCAL+`users/addOrder`, foodOrder)
  }
  addFood(food: Food): Observable<User>{
    return this.http.put<User>(API_LOCAL+'users/addFood',food);
  }
  showCurrentFO():Observable<any>{
    return this.http.get<any>(API_LOCAL+'users/currentFO');
  }
  updateFoodList(foods: Food[]): Observable<User>{
    return this.http.put<User>(API_LOCAL+'users/updateFoodList',foods);
  }
  payment(userId: number,foId:number,resId: number,payment: Payment):Observable<any>{
    return this.http.put(API_LOCAL+'users/'+userId+'/'+foId+'/'+resId+'/payment',payment);
  }
  showAllUser():Observable<User []>{
    return this.http.get<User[]>(API_LOCAL+'users')
  }
  bookingOrder():Observable<any>{
  return this.http.get(API_LOCAL+'users/bookingOrder');
  }
  cancelOrder():Observable<any>{
    return this.http.get(API_LOCAL+'users/cancelFO');
  }
  merchantRegister():Observable<any>{
    return this.http.get(API_LOCAL+'users/merchantRegister');
  }
}

