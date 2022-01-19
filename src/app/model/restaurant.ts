import {FoodOrder} from "./food-order";
import {Coupon} from "./coupon";
import {Food} from "./food";

export class Restaurant {
  id: number;
  name: string;
  address: string;
  claim: string;
  revenue: number;
  userId: number;
  foodOrderList: FoodOrder [];
  generalStatus: any;
  couponList: Coupon [];
  foodList: Food [];

  constructor(id: number, name: string, address: string, claim: string, revenue: number, userId: number, foodOrderList: FoodOrder[], generalStatus: any, couponList: Coupon[], foodList: Food[]) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.claim = claim;
    this.revenue = revenue;
    this.userId = userId;
    this.foodOrderList = foodOrderList;
    this.generalStatus = generalStatus;
    this.couponList = couponList;
    this.foodList = foodList;
  }
}
