import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../service/token.service";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  // @ts-ignore
  user: User = {};
  hide = true;
  constructor(

    private tokenService: TokenService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();

  }

  loadData(){
    const userId = this.tokenService.getUserId();
    this.userService.getUserById(userId).subscribe(data => {
      this.user = data;
      console.log("user: "+ JSON.stringify(this.user));
    })
  }

  // @ts-ignore
  onUpload(event) {
    this.user.avatar = event
  }

  onEditUser() {
    console.log('user: ' + JSON.stringify(this.user));
    this.userService.updateUser(this.user).subscribe(user => {
      this.user = user;
      alert("User-profile updated!")
    })

  }
  logout() {
    this.tokenService.logout();
    this.router.navigate(['/']);
  }
}
