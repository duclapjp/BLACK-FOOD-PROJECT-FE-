import { Component, OnInit } from '@angular/core';
import {Food} from "../../../model/food";
import {FoodService} from "../../../service/food.service";
import {Router} from "@angular/router";

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
    image:''
  }
  form: any={

}
  constructor(private foodService:FoodService,
              private route: Router) { }

  ngOnInit(): void {
  }

  createNewFood() {
    // @ts-ignore
    this.food = {
      name: this.form.name,
      price: this.form.price,
      quantity: this.form.quantity,
      description: this.form.description,
      image: this.form.image,
      restaurant: {
        id: 1
      },
      foodOrder: {
        id: 4
      }

    }
    console.log('food: ' + JSON.stringify(this.food));

    this.foodService.createNewFood(this.food).subscribe(()=>{
      this.route.navigateByUrl('/restaurant-homepage')
    });
  }
  // @ts-ignore
  uploadFile(event) {
    console.log(event)
      // @ts-ignore
    this.form.image = event
  }
}
