import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/User";
import {UserService} from "../../../service/user.service";
import {TokenService} from "../../../service/token.service";
import {ChartConfiguration, ChartData, ChartEvent, ChartType} from "chart.js";

@Component({
  selector: 'app-reveneue-charts',
  templateUrl: './reveneue-charts.component.html',
  styleUrls: ['./reveneue-charts.component.css']
})
export class ReveneueChartsComponent implements OnInit {
  // @ts-ignore
  user: User={}
  userId=0;

  public barChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.4
      }
    },

    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: { display: true },
    }
  };
  public barChartLabels: string[] = [ '1', '2', '3', '4', '5', '6', '7' ];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
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
              private tokenService: TokenService) {
    this.userId =  this.tokenService.getUserId();
    this.userService.getUserById(this.userId).subscribe(user=>{
      this.user = user;
    })
  }

  ngOnInit(): void {
  }

}
