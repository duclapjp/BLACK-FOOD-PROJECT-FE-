import { Component, OnInit } from '@angular/core';
import {FoodService} from "../../../service/food.service";
import {Food} from "../../../model/food";
import {TokenService} from "../../../service/token.service";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/User";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-homepage',
  templateUrl: './restaurant-homepage.component.html',
  styleUrls: ['./restaurant-homepage.component.css']
})
export class RestaurantHomepageComponent implements OnInit {
  userId:number =0;
  restaurantId:number =0;
  // @ts-ignore
  user: User = {}
  search: string='';
  foods: Food[] =[]

  constructor(
    private foodService: FoodService,
    private tokenService: TokenService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getCurrentUserId();
    this.loadData();
  }

  loadData() {
    this.foodService.findAll().subscribe(foods => {
      this.foods = foods;
      console.log('foods: '+ this.foods);
    });
    this.userService.getUserById(this.userId).subscribe(user=>{
      this.user = user;
      console.log("user: " + this.user)
      this.restaurantId = this.user.restaurantId;
      console.log("resId:" +this.restaurantId);
    });
  }

  getCurrentUserId(){
   this.userId = this.tokenService.getUserId();
   console.log('userId o token: ' + this.userId);
  }



  onSearchFood() {
    this.router.navigate(['/restaurant-search-food/'+this.restaurantId],{queryParams:{search: this.search}});
  }
  toRestaurantDetail() {
    console.log('a')
    this.router.navigate(['/restaurant-detail/'+this.restaurantId],{queryParams:{userId: this.userId}});
  }
}
