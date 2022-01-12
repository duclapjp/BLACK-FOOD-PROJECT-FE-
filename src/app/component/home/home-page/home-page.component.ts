import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  checkLogin = false;
  userName = '';
  userMoney = 0;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.check();
    this.getUserName();
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
  getUserName() {
    this.userName = this.tokenService.getName();
  }

  logout() {
    this.tokenService.logout();
    this.router.navigate(['/']);
    this.checkLogin =false

  }
}
