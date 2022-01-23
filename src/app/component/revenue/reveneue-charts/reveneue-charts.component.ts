import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/User";
import {UserService} from "../../../service/user.service";
import {TokenService} from "../../../service/token.service";
import {ChartConfiguration, ChartData, ChartEvent, ChartType} from "chart.js";
import {FoodOrder} from "../../../model/food-order";
import {ActivatedRoute, Params} from "@angular/router";
import {RestaurantService} from "../../../service/restaurant.service";
import {Restaurant} from "../../../model/restaurant";

@Component({
  selector: 'app-reveneue-charts',
  templateUrl: './reveneue-charts.component.html',
  styleUrls: ['./reveneue-charts.component.css']
})
export class ReveneueChartsComponent implements OnInit {
  // @ts-ignore
  user: User={}
  userId=0;
  // @ts-ignore
  foodOrder: FoodOrder[] [];
  // @ts-ignore
  restaurant: Restaurant = {};
  restaurantId: number = 0;

  public barChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.4
      }
    },

    scales: {
      x: {},
      y: {
        min: 1
      }
    },
    plugins: {
      legend: { display: true },
    }
  };
  public barChartLabels: string[] = [ '15/1', '16/1', '17/1', '18/1', '19/1', '20/1', '21/1' ];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 20 ], label: 'Revenue' },
      { data: [ 10, 8, 9, 9, 6, 7, 5 ], label: 'Order' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  constructor(private userService: UserService,
              private tokenService: TokenService,
              private activeRoute: ActivatedRoute,
              private restaurantService: RestaurantService) {
    this.userId =  this.tokenService.getUserId();
    this.userService.getUserById(this.userId).subscribe(user=>{
      this.user = user;

      this.activeRoute.params.subscribe((params: Params)=>{
        this.restaurantId = params['id'];
        this.restaurantService.findRestaurantById(this.restaurantId).subscribe(res => {
          this.restaurant = res;
        })
      });
    })
  }

  ngOnInit(): void {
  }

}
