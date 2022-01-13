import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../../model/restaurant";
import {RestaurantService} from "../../../service/restaurant.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  // @ts-ignore
  restaurant: Restaurant={};

  constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(restaurantID=>{
      // @ts-ignore
      const id= +restaurantID.get('id');
      this.restaurantService.findRestaurantById(id).subscribe(restaurant=>{
        this.restaurant=restaurant;
      })
    })
  }

}
