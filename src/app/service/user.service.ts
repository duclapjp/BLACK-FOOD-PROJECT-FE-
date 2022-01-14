import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {User} from "../model/User";
import {Purchase} from "../model/Purchase";
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
}
