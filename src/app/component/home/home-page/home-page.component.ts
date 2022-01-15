import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../service/token.service";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/User";
import {FoodService} from "../../../service/food.service";
import {Food} from "../../../model/food";
import {FoodOrderService} from "../../../service/foodOrder.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  checkLogin = false;
  userName = '';
  userMoney = 0;
  // @ts-ignore
  user: User = {}
  foods: Food [] = [];
  foodId: number = 0;
  // @ts-ignore
  food: Food = {}

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private userService: UserService,
    private foodService: FoodService,
    private foodOrderService: FoodOrderService
  ) {
    this.showAllFood();
  }

  ngOnInit(): void {
    this.check();
    // this.getUserName();
    this.getUserById()
  }

  check() {
    const token = this.tokenService.getToken();
    if (token != null) {
      this.checkLogin = true;
    }
  }

  getUserName() {
    this.userName = this.tokenService.getName();
  }

  getUserById() {

    const userId = this.tokenService.getUserId();
    this.userService.getUserById(userId).subscribe(data => {
      this.user = data;
      console.log('user: ' + JSON.stringify(data));
    })
  }

  logout() {
    this.tokenService.logout();
    this.router.navigate(['/']);
    this.checkLogin = false
  }

  showAllFood() {
    this.foodService.findAll().subscribe(foods => {
      this.foods = foods;
    });
  }


  addShopCart($event: MouseEvent) {
    // @ts-ignore
    this.foodId = event.target.id
    //lấy userId
    //tìm trong bảng foodOrder với userId. check status nếu chưa thanh toán
    //nếu có status chưa thanh toán thì lấy id của foodOrder lưu vào bảng foodOrderItem với: foodId+ foodOrderId
    //nếu không có status chưa hoàn thành thì: tạo mới 1 hàng trong foodOrder và lấy id của foodOrder.
    // tiếp tục lấy id của foodOrder lưu vào bảng foodOrderItem với: foodId+ foodOrderId
    this.foodService.findById(this.foodId).subscribe(food => {
      this.food = food;
    });
  }
}
