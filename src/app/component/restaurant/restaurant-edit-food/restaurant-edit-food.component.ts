import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FoodService} from "../../../service/food.service";
import {Food} from "../../../model/food";
import {log} from "util";

@Component({
  selector: 'app-restaurant-edit-food',
  templateUrl: './restaurant-edit-food.component.html',
  styleUrls: ['./restaurant-edit-food.component.css']
})
export class RestaurantEditFoodComponent implements OnInit {

  foodId: number = 0;
  // @ts-ignore
  food: Food = {};
  resId = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.foodId = params['id'];
      this.foodService.findById(this.foodId).subscribe(food => {
        this.food = food;
        this.resId = food.restaurantId;
        console.log('food: ' + JSON.stringify(this.food));
      })

    })
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.foodService.update(this.food).subscribe(food => {
      this.food = food;
      // console.log('foodUpdate: ' + JSON.stringify(this.food));
      this.router.navigate(['/restaurant-homepage/'+this.resId]);
    });
  }

  // @ts-ignore
  uploadFile(event) {
    this.food.image = event;
  }
}
