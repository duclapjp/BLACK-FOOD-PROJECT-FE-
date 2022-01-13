import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../service/token.service";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/User";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  checkLogin = false;
  userName = '';
  userMoney = 0;
  // @ts-ignore
  user: User ={}

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.check();
    // this.getUserName();
    this.getUserById()
  }

  check() {
    const token = this.tokenService.getToken();
    if (token!=null){
      this.checkLogin = true;
    }
  }
  getUserName() {
    this.userName = this.tokenService.getName();
  }
  getUserById() {

    const userId = this.tokenService.getUserId();
    this.userService.getUserById(userId).subscribe(data => {
      this.user = data;
      console.log('user: ' + JSON.stringify(data));
    })
  }

  logout() {
    this.tokenService.logout();
    this.router.navigate(['/']);
    this.checkLogin =false

  }
}
