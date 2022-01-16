import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../../../service/restaurant.service";
import {Restaurant} from "../../../model/restaurant";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-show-restaurant',
  templateUrl: './show-restaurant.component.html',
  styleUrls: ['./show-restaurant.component.css']
})
export class ShowRestaurantComponent implements OnInit {
  // @ts-ignore
  id:number =0;
  // @ts-ignore
  restaurant: Restaurant ={};
  constructor(private restaurantService: RestaurantService,
              private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((params: Params)=>{
      this.id= params['id'];
      console.log(this.id);
    })
  }

  ngOnInit(): void {
    this.findRestaurantById();
  }
  findRestaurantById(){
    this.restaurantService.findRestaurantById(this.id).subscribe(restaurant=>{
      this.restaurant = restaurant;
    });
  }
}
