import {Food} from "./food";
import {Restaurant} from "./restaurant";

export class FoodOrder {
  id: number;
  time: any;
  totalPrice: number;
  note: string;
  generalStatus:any;
  food: Food[];
  user: any;
  restaurant: Restaurant;


  constructor(id: number, time: any, totalPrice: number, note: string, generalStatus: any, food: Food[], user: any, restaurant: Restaurant) {
    this.id = id;
    this.time = time;
    this.totalPrice = totalPrice;
    this.note = note;
    this.generalStatus = generalStatus;
    this.food = food;
    this.user = user;
    this.restaurant = restaurant;
  }

}
