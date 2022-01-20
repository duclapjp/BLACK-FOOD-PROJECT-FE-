import {FoodOrder} from "./food-order";
import {Coupon} from "./coupon";
import {Food} from "./food";

export class Restaurant {
  id: number;
  name: string;
  address: string;
  claim: string;
  revenue: number;
  image: string;
  userId: number;
  foodOrderList: FoodOrder [];
  status: any;
  couponList: Coupon [];
  foodList: Food [];


  constructor(id: number, name: string, address: string, claim: string, revenue: number, image: string, userId: number, foodOrderList: FoodOrder[], status: any, couponList: Coupon[], foodList: Food[]) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.claim = claim;
    this.revenue = revenue;
    this.image = image;
    this.userId = userId;
    this.foodOrderList = foodOrderList;
    this.status = status;
    this.couponList = couponList;
    this.foodList = foodList;
  }
}
