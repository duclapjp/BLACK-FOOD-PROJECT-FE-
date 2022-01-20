import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RestaurantService} from "../../../service/restaurant.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Restaurant} from "../../../model/restaurant";

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
  form: any = {};
  userId: number = 0;
  resId = 0;

  constructor(
    private restaurantService: RestaurantService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
    this.userId = params['id'];
    })
  }

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

    ngSubmit() {
        // @ts-ignore
      let restaurant: Restaurant = {
          name: this.form.name,
          address: this.form.address,
          image: this.form.image,
        claim: '',
        revenue: 0,
        userId: this.userId,
        status: {
            id: 1,
        }
        }
        console.log("res: " + JSON.stringify(restaurant));
        this.restaurantService.createRestaurant(restaurant).subscribe(res => {
          this.resId = res.id
          alert("Tạo mới thành công! Xin mời trải nghiệm");
          this.router.navigate([`/restaurant-homepage/${this.resId}`]);
        })
    }

  uploadFile(event: any) {
    // @ts-ignore
    this.form.image = event;
  }
}
