import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../service/token.service";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/User";
import {FoodService} from "../../../service/food.service";
import {Food} from "../../../model/food";
import {FoodOrder} from "../../../model/food-order";
import {Restaurant} from "../../../model/restaurant";
import {Payment} from "../../../model/Payment";
import {RestaurantService} from "../../../service/restaurant.service";


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
  foodList: Food [] = [];
  foodId: number = 0;
  // @ts-ignore
  foodOrder: FoodOrder = {}
  restaurants: Restaurant [] = [];
  totalP = 0;
  checkAdmin = false
  checkMerchant = false;
  checkRes = false;
  checkCreateRes = false;
  // @ts-ignore
  restaurant: Restaurant = {}

  checkNull = false;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private userService: UserService,
    private foodService: FoodService,
    private restaurantService: RestaurantService
  ) {
    this.showAllFood();
  }

  ngOnInit(): void {

    this.check();
    // this.getUserName();
    this.getUserById();
    this.getFoodOrder();
    this.checkAdminRole();
    console.log('checkCreate: '+ this.checkCreateRes);
  }

  getFoodOrder() {
    this.userService.showCurrentFO().subscribe(fo => {
      this.foodOrder = fo;
      console.log('fo: ' + JSON.stringify(this.foodOrder));
    })
  }

  getResByUser() {
    this.restaurantService.findRestaurantById(this.user.restaurantId).subscribe(res => {
      this.restaurant = res;
    })
  }

  getResByFood(resId: number){
    this.restaurantService.findRestaurantById(resId).subscribe(res => {
      return res.name;
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
      console.log(`user` + JSON.stringify(this.user));
      if (this.user.restaurantId == null){
        this.checkCreateRes = true;
      }
      else {
        //   this.checkMerchant = true;
        this.restaurantService.findRestaurantById(this.user.restaurantId).subscribe(res => {
          this.restaurant = res;
        })
      }
      // @ts-ignore
      let roles: Role [] = this.user.roles
      console.log(`user` + JSON.stringify(this.user));
      console.log(`roles` + roles);
      roles.forEach(role => {
        if (role.name == "ADMIN") {
          this.checkAdmin = true;
          console.log(`checkAdmin` + this.checkAdmin);
        } else if (role.name == "MERCHANT") {
          if (role.status.id == 2){
           this.checkRes = true;
          }
          this.checkMerchant = true;
        }
      })
      console.log(`roles` + JSON.stringify(roles));
    });
  }

  logout() {
    this.tokenService.logout();
    this.router.navigate(['/']);
    this.checkLogin = false;
    this.checkAdmin = false;
    this.checkMerchant = false;
    this.checkRes = false;
    this.checkCreateRes = false;
  }

  showAllFood() {
    this.foodService.findAll().subscribe(foods => {
      this.foodList = foods;
      console.log(`foods` + JSON.stringify(this.foodList))
    });
  }


  addShopCart(event: any) {
    // let resIdOfCart = 0;
    // this.foodOrder.foodList.forEach(f => {
    //   resIdOfCart = f.restaurantId
    // })
    if (this.foodOrder.generalStatus.id == 5) {
      alert("Giao dịch cũ vẫn tồn tại. Vui lòng xử lý trước khi tạo đơn hàng mới");
    }
    else if (this.foodOrder.generalStatus.id == 4) {

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

  }

  public getTotalPrice(foods: Food[]) {
    let sum = 0;
    if (foods != undefined) {
      foods.forEach(food => {
        sum += food.price
      });
      return sum
    }
    return sum;
  }

  removeFood(event: any) {
    let index = event.target.id;
    console.log('index: ' + index);
    this.foodOrder.foodList.splice(index, 1);
    this.userService.updateFoodList(this.foodOrder.foodList).subscribe(user => {
      this.user = user;
    })
  }



  checkAdminRole() {

  }

  merchantRegister() {
    this.userService.merchantRegister().subscribe(user => {
      alert('Yêu cầu của bạn đã được gửi, vui lòng chờ xác thực từ admin');
      window.location.reload();
    })
  }
}
