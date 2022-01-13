import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RestaurantService} from "../../../service/restaurant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css']
})
export class RestaurantCreateComponent implements OnInit {
  formCreateRestaurant=new FormGroup({
    name: new FormControl(),
    address: new FormControl()
  })

  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  backToHomepage(){
    this.router.navigate(['/']);
  }

  createRestaurant(){
    this.restaurantService.createRestaurant(this.formCreateRestaurant.value).subscribe(data=>{
      this.backToHomepage();
    })
  }
}
