import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../../model/restaurant";
import {RestaurantService} from "../../../service/restaurant.service";
import {ActivatedRoute, Params} from "@angular/router";
import {TokenService} from "../../../service/token.service";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/User";

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  // @ts-ignore
  resId:number=0;
  // @ts-ignore
  restaurant: Restaurant ={};
   // @ts-ignore
  user: User ={}
  userId: number=0;
  constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private userService: UserService
  ){
    this.getUserId();

    this.activatedRoute.paramMap.subscribe(param=>{
      this.resId = Number(param.get('id'));
      console.log(this.resId);
    });
    this.restaurantService.findRestaurantById(this.resId).subscribe(restaurant=>{
      this.restaurant=restaurant;
    });
    this.userService.getUserById(this.userId).subscribe(user=>{
      this.user=user;
    })
  }

  getUserId(){
  this.userId =  this.tokenService.getUserId()
  }


  ngOnInit(): void {
    };

  }
