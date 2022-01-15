import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../service/token.service";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/User";
import {FoodService} from "../../../service/food.service";
import {Food} from "../../../model/food";
import {FoodOrderService} from "../../../service/foodOrder.service";
import {FoodOrder} from "../../../model/food-order";
import {Restaurant} from "../../../model/restaurant";
import {RestaurantService} from "../../../service/restaurant.service";
import {GeneralStatus} from "../../../model/general-status";
import {Payment} from "../../../model/Payment";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  foodsLength = 0;
  checkLogin = false;
  userName = '';
  userMoney = 0;
  // @ts-ignore
  user: User = {}
  foods: Food [] = [];
  foodId: number = 0;
  // @ts-ignore
  foodOrder: FoodOrder = {}


  totalP = 0;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private userService: UserService,
    private foodService: FoodService,
    private foodOrderService: FoodOrderService,
    private restaurantService: RestaurantService
  ) {
    this.showAllFood();
  }

  ngOnInit(): void {
    this.check();
    // this.getUserName();
    this.getUserById();
    this.getFoodOrder();
  }
  getFoodOrder(){
  this.userService.showCurrentFO().subscribe(fo => {
    this.foodOrder = fo;
    console.log('fo: ' + this.foodOrder);
  })

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
      // console.log('user: ' + JSON.stringify(data));
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
      console.log(`foods` + this.foods)
    });
  }


  addShopCart($event: MouseEvent) {
    // @ts-ignore
    this.foodId = event.target.id;
    console.log('foodid: ' + this.foodId);
       // @ts-ignore
    let food: Food = {
         id: this.foodId
       }
        this.userService.addFood(food).subscribe(user => {
          this.user = user;
          this.getFoodOrder();
          alert('Thêm vào giỏ hàng thành công');
        });
  }
  public getTotalPrice(foods: Food[]){
    let sum = 0;
    foods.forEach(food => {
      sum += food.price
    });
    return sum
  }

  removeFood(event:any) {
    let index = event.target.id;
    console.log('index: ' + index);
    this.foodOrder.food.splice(index,1);
    this.userService.updateFoodList(this.foodOrder.food).subscribe(user => {
      this.user = user;
    })
  }

  payment() {
    let totalP = this.getTotalPrice(this.foodOrder.food);
    // @ts-ignore
    let payment: Payment = {
      totalPrice: totalP,
    }
    this.userService.payment(payment).subscribe(user => {
      this.user = user;
    })
  }
}
