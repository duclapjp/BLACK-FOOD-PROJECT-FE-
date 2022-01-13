import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../../model/restaurant";
import {RestaurantService} from "../../../service/restaurant.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-delete',
  templateUrl: './restaurant-delete.component.html',
  styleUrls: ['./restaurant-delete.component.css']
})
export class RestaurantDeleteComponent implements OnInit {
  // @ts-ignore
  restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private  activatedRoute: ActivatedRoute,
    private  router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(restaurantId=>{
      // @ts-ignore
      const id= +restaurantId.get('id');
      this.restaurantService.findRestaurantById(id).subscribe(restaurant=>{
        this.restaurant=restaurant;
      })
    })
  }

  backToHomepage(){
    this.router.navigate(['/']);
  }

  deleteRestaurantById(){
    this.restaurantService.deleteRestaurantById(this.restaurant.id).subscribe(data=>{
      this.backToHomepage();
    })
  }
}
