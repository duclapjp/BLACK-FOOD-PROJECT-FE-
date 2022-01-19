import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/User";
import {GeneralStatus} from "../../../model/general-status";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-admin-role-verify',
  templateUrl: './admin-role-verify.component.html',
  styleUrls: ['./admin-role-verify.component.css']
})
export class AdminRoleVerifyComponent implements OnInit {

  // @ts-ignore
  user: User = {}
  userId = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];
      console.log('userId: ' + this.userId)
    })
  }

  ngOnInit(): void {
    this.getUserById();
  }
  getUserById(){
    this.userService.getUserById(this.userId).subscribe(user => {
      this.user = user;
    })
  }
  checkVerify(status: GeneralStatus){
    if (status.id ==1 || status.id ==3){
      return true;
    }
    return false
  }
  checkBlock(status: GeneralStatus){
    if (status.id == 2){
      return true;
    }
    return false
  }
  verify(event: any) {
    let roleName = event.currentTarget.name;
    console.log("roleName: " +event);
    this.authService.verify(this.userId,roleName).subscribe(user=>{
      alert('Phê duyệt thành công');
      window.location.reload();
    });

  }
  block(event: any) {
    let roleName = event.currentTarget.name;
    console.log("roleName: " +roleName);
    this.authService.block(this.userId,roleName).subscribe(user=>{
      alert('Thực hiện khóa quyền thành công!');
      window.location.reload();
    });

  }

}
