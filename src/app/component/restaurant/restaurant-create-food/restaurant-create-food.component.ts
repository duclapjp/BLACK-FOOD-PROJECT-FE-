import { Component, OnInit } from '@angular/core';
import {Food} from "../../../model/food";
import {FoodService} from "../../../service/food.service";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/User";
import {TokenService} from "../../../service/token.service";

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
  // @ts-ignore
  user: User = {}
  constructor(private foodService:FoodService,
              private route: Router,
              private userService: UserService,
              private tokenStorage: TokenService) { }

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
      this.route.navigate(['/restaurant-homepage'])
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
