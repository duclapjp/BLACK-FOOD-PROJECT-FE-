import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../service/token.service";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/User";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  // @ts-ignore
  user: User = {};
  constructor(

    private tokenService: TokenService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    const userId = this.tokenService.getUserId();
    this.userService.getUserById(userId).subscribe(data => {
      this.user = data;
      console.log("user: "+ this.user);
    })
  }
}
