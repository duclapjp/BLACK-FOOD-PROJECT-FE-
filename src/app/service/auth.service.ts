import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";

import {Observable} from "rxjs";
import {SignUpForm} from "../model/SignUpForm";
import {JwtResponse} from "../model/JwtResponse";
import {User} from "../model/User";



const API_LOCAL = `${environment.API_LOCAL}`
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  signup(signUpForm: SignUpForm): Observable<SignUpForm>{
    // @ts-ignore
    return this.http.post<SignUpForm>(API_LOCAL+'signup', signUpForm);
  }

  signIn (signInForm: SignUpForm):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(API_LOCAL+'login', signInForm);
  }
  // @ts-ignore
  updateAvatar(changeAvatar: ChangeAvatar):Observable<any>{
    return this.http.put(API_LOCAL+'users/change-avatar',changeAvatar);
  }

  handleError(err: any){
    if (err.error instanceof Error) {
      console.log(`Client-side error: ${err.error.message}`);
    } else {
      console.log(`Server-side error: ${err.status} - ${err.error.value}`);
    }
  }
  // @ts-ignore
  verify(id: number, roleName: string): Observable<User>{
    return this.http.get<User>(API_LOCAL+'verify/'+id+"/"+roleName)
  }
  block(id: number, roleName: string): Observable<User>{
    return this.http.get<User>(API_LOCAL+'block/'+id+"/"+roleName)
  }
}
