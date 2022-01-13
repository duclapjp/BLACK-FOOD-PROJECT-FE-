import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {User} from "../model/User";
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
}
