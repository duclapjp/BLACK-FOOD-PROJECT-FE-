import { Component, OnInit } from '@angular/core';
import {Food} from "../../../model/food";
import {FoodService} from "../../../service/food.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/User";
import {TokenService} from "../../../service/token.service";
import {Restaurant} from "../../../model/restaurant";
import {RestaurantService} from "../../../service/restaurant.service";

@Component({
  selector: 'app-restaurant-create-food',
  templateUrl: './restaurant-create-food.component.html',
  styleUrls: ['./restaurant-create-food.component.css']
})
export class RestaurantCreateFoodComponent implements OnInit {
  // @ts-ignore
  food: Food ={
    name:'',
    price:0,
    quantity:0,
    description:'',
    image:'',
    restaurantId:0,
  }
  form: any={
}
resId = 0;
  // @ts-ignore
  restaurant: Restaurant = {};
  // @ts-ignore
  user: User = {}
  constructor(private foodService:FoodService,
              private route: Router,
              private userService: UserService,
              private tokenStorage: TokenService,
              private activatedRoute: ActivatedRoute,
              private restaurantService: RestaurantService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.resId = params['id'];
      this.restaurantService.findRestaurantById(this.resId).subscribe(res => {
        this.restaurant = res;
      })

    })
  }

  ngOnInit(): void {
    this.getUser();
  }

  createNewFood() {
    // @ts-ignore
    this.food = {
      name: this.form.name,
      price: this.form.price,
      quantity: this.form.quantity,
      description: this.form.description,
      image: this.form.image,
      restaurantId:this.user.restaurantId
    }
    console.log('food: ' + JSON.stringify(this.food));

    this.foodService.createNewFood(this.food).subscribe(()=>{
      this.route.navigate(['/restaurant-homepage/'+this.resId]);
    });
  }
  // @ts-ignore
  uploadFile(event) {
    console.log(event)
      // @ts-ignore
    this.form.image = event
  }
  getUser(){
    this.userService.getUserById(this.tokenStorage.getUserId()).subscribe(user=>{
      this.user=user;
      console.log(user);
    })
  }
}
