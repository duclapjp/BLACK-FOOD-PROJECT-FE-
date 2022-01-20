import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Restaurant} from "../model/restaurant";
import {FoodOrder} from "../model/food-order";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  API_SERVER_URL=environment.API_LOCAL;

  constructor( private http:HttpClient) { }

  public findAllRestaurant(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(`${this.API_SERVER_URL}restaurants`);
  }

  public createRestaurant (restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(`${this.API_SERVER_URL}restaurants`,restaurant);
  }

  public editRestaurant (restaurant: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(`${this.API_SERVER_URL}restaurants`,restaurant);
  }

  public findRestaurantById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.API_SERVER_URL}restaurants/`+id);
  }

  public deleteRestaurantById(id: number): Observable<Restaurant> {
    return this.http.delete<Restaurant>(`${this.API_SERVER_URL}restaurants/`+id);
  }
  public showFOBookingListOfRes(resId: number): Observable<FoodOrder[]>{
  return this.http.get<FoodOrder[]>(`${this.API_SERVER_URL}restaurants/bookingFO/` + resId);
  }
}

