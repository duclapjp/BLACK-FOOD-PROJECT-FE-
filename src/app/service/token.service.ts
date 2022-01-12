import { Injectable } from '@angular/core';

const USER_ID = "User_Id";
const TOKEN_KEY = 'Token_Key';
const NAME_KEY  = 'Name_Key';
const ROLE_KEY = 'Role_Key';
const AVATAR_KEY = 'Avatar_Key';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private roles: Array<string> = [];
  constructor() { }

  public setUserId(id:number){
    // @ts-ignore
    //Xoa di trong th co userid tu truoc
    window.sessionStorage.removeItem(USER_ID);
    // @ts-ignore
    //xet lai len sessionStorage
    window.sessionStorage.setItem(USER_ID,id);
  }
  public getUserId():number{
    // @ts-ignore
    return window.sessionStorage.getItem(USER_ID);
  }
  public setToken(token :string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }
  public getToken(): string {
    // @ts-ignore
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public setName(name: string) {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY,name);
  }
  public getName() : string {
    // @ts-ignore
    return window.sessionStorage.getItem(NAME_KEY);
  }
  public setAvatar(avatar: string) {
    window.sessionStorage.removeItem(AVATAR_KEY);
    window.sessionStorage.setItem(AVATAR_KEY,avatar);
  }
  public getAvatar() :string {
    // @ts-ignore
    return window.sessionStorage.getItem(AVATAR_KEY);
  }
  public setRole(roles: string[]) {
    window.sessionStorage.removeItem(ROLE_KEY);
    // @ts-ignore
    window.sessionStorage.setItem(ROLE_KEY,JSON.stringify(roles));
  }
  // @ts-ignore
  public getRole():string[] {
    this.roles = []
    if (sessionStorage.getItem(ROLE_KEY)){
      // @ts-ignore
      JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(role => {
        this.roles.push(role);
      });
      return this.roles;
    }
  }

  public logout() {
    window.sessionStorage.clear();
  }
}
