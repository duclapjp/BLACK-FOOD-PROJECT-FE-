import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.tokenService.logout();
    this.router.navigate(['/']).then(()=> {
      window.location.reload();
    })
  }
}
