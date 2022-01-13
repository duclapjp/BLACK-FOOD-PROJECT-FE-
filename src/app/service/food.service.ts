import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Food} from "../model/food";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoodService {


  constructor(private http: HttpClient) { }
  createNewFood(food: Food): Observable<Food> {
    return this.http.post<Food>(`http://localhost:8080/foods`, food);
  }
}
