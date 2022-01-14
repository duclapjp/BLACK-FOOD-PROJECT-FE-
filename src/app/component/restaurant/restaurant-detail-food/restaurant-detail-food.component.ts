import { Component, OnInit } from '@angular/core';
import {Food} from "../../../model/food";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Params} from "@angular/router";
import {FoodService} from "../../../service/food.service";

@Component({
  selector: 'app-restaurant-detail-food',
  templateUrl: './restaurant-detail-food.component.html',
  styleUrls: ['./restaurant-detail-food.component.css']
})
export class RestaurantDetailFoodComponent implements OnInit {
  // @ts-ignore
  food: Food={}
  id:number=0;
  constructor(private http:HttpClient,
              private activeRoute: ActivatedRoute,
              private foodService: FoodService) {
    this.activeRoute.params.subscribe((params: Params)=>{
      this.id=params['id']
      this.foodService.findById(this.id).subscribe(food=>{
        this.food=food
      });
      console.log(this.food);
    })
  }

  ngOnInit(): void {
  }

}
