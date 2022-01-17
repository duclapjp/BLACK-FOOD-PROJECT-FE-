import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../service/token.service";
import {Router} from "@angular/router";
import {User} from "../../../model/User";
import {UserService} from "../../../service/user.service";
import {AuthService} from "../../../service/auth.service";
import {GeneralStatus} from "../../../model/general-status";

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
  users:User [] = [];
  constructor(private tokenService: TokenService,
              private userService:UserService,
              private authService: AuthService
              ) { }
  userId: number=0;
  ngOnInit(): void {
    this.showAllUser();
  }
  showAllUser(){
    this.userService.showAllUser().subscribe(users=>{
      this.users = users;
    })
  }

  verify(event: any) {
    this.userId = event.target.id
    this.authService.verify(this.userId).subscribe(user=>{
      alert('Phê duyệt thành công');
      window.location.reload();
    });

  }
  checkVerify(status: GeneralStatus){
    if (status.id ==1){
      return true;
    }
    return false
  }
}
