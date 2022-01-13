import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../../model/restaurant";
import {RestaurantService} from "../../../service/restaurant.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {
  // @ts-ignore
  restaurant: Restaurant={};

  constructor(
    private restaurantService: RestaurantService,
    private  activatedRoute: ActivatedRoute,
    private  router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      let id= params['id'];
      this.restaurantService.findRestaurantById(id).subscribe(data=>{
        this.restaurant=data;
      })
    })
  }

  backToHomepage(){
    this.router.navigate(['/']);
  }

  editRestaurant(){
    this.restaurantService.editRestaurant(this.restaurant).subscribe(data=>{
      this.backToHomepage();
    })
  }
}
