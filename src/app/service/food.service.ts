import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Food} from "../model/food";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
const API_LOCAL = `${environment.API_LOCAL}`
@Injectable({
  providedIn: 'root'
})
export class FoodService {


  constructor(private http: HttpClient) { }
  createNewFood(food: Food): Observable<Food> {
    return this.http.post<Food>(API_LOCAL+'foods', food);
  }


  findAll(): Observable<Food[]> {
    return this.http.get<Food[]>(API_LOCAL+'foods');
  }
  findById(id: number): Observable<Food>{
    return this.http.get<Food>(API_LOCAL+'foods/'+id);
  }


  update(food: Food): Observable<Food>{
    return this.http.put<Food>(API_LOCAL + 'foods', food);
  }
  delete(id: number) {
    return  this.http.delete(API_LOCAL+'foods/'+id);
  }
}
