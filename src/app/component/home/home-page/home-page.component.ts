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
  restaurants: Restaurant [] = [];
  totalP = 0;
  checkAdmin = false


  constructor(
    private tokenService: TokenService,
    private router: Router,
    private userService: UserService,
    private foodService: FoodService,
    private foodOrderService: FoodOrderService,
    private restaurantService: RestaurantService,
  ) {
    this.showAllFood();
  }

  ngOnInit(): void {
    this.check();
    // this.getUserName();
    this.getUserById();
    this.getFoodOrder();
    this.checkAdminRole();
  }

  getFoodOrder() {
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

  //lay ve user hien tai

  getUserById() {

    const userId = this.tokenService.getUserId();
    this.userService.getUserById(userId).subscribe(data => {
      this.user = data;
      // console.log('user: ' + JSON.stringify(data));
      // @ts-ignore
      let roles: Role [] = this.user.roles
      console.log(`user`+JSON.stringify(this.user));
      console.log(`roles`+roles);
      roles.forEach(role=>{
        if (role.name=="ADMIN"){
          this.checkAdmin= true;
          console.log(`checkAdmin`+this.checkAdmin);
        }
      })
      console.log(`roles`+JSON.stringify(roles));
    });
  }

  logout() {
    this.tokenService.logout();
    this.router.navigate(['/']);
    this.checkLogin = false
    this.checkAdmin = false
  }

  showAllFood() {
    this.foodService.findAll().subscribe(foods => {
      this.foods = foods;
      console.log(`foods` + this.foods)
    });
  }


  addShopCart(event: any) {
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

  public getTotalPrice(foods: Food[]) {
    let sum = 0;
    foods.forEach(food => {
      sum += food.price
    });
    return sum
  }

  removeFood(event: any) {
    let index = event.target.id;
    console.log('index: ' + index);
    this.foodOrder.food.splice(index, 1);
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
      console.log('return: ' + JSON.stringify(user));
      if (user.message != null) {
        alert("Số tiền trong tài khoản không đủ để thực hiện giao dịch này.  \n Vui lòng nạp thêm tiền để tiếp tục sử dụng dịch vụ! ");

      } else {
        alert("Thực hiện thanh toán thành công!");
        this.router.navigate(['/']).then(() => {
          window.location.reload()
        });
      }
    })
  }
  checkAdminRole(){

  }
}
