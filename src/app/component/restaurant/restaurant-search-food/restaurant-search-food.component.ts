import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/User";
import {ActivatedRoute, Params} from "@angular/router";
import {FoodService} from "../../../service/food.service";
import {Food} from "../../../model/food";

@Component({
  selector: 'app-restaurant-search-food',
  templateUrl: './restaurant-search-food.component.html',
  styleUrls: ['./restaurant-search-food.component.css']
})
export class RestaurantSearchFoodComponent implements OnInit {
  resId = 0;
  search = '';
  // @ts-ignore
  foods: Food [] =[];
  constructor(
    private activatedRouter: ActivatedRoute,
    private foodService: FoodService
  ) {
    this.activatedRouter.queryParams.subscribe((params: Params) => {
      this.search = params['search'];
      console.log('search: ' + this.search);
    });
    this.activatedRouter.params.subscribe((params: Params) => {
      this.resId = params['id'];
      console.log('resId:' +this.resId);
    });
    this.foodService.searchByRestaurantIdAndName(this.resId,this.search).subscribe(foods=>{
      this.foods=foods;
      console.log(this.foods);
    })
  }

  ngOnInit(): void {
  }

}
