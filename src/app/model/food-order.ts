import {Food} from "./food";
export class FoodOrder {
  id: number;
  time: any;
  totalPrice: number;
  note: string;
  generalStatus:any;
  foodList: Food[];
  userId: number;


  constructor(id: number, time: any, totalPrice: number, note: string, generalStatus: any, food: Food[], userId: number) {
    this.id = id;
    this.time = time;
    this.totalPrice = totalPrice;
    this.note = note;
    this.generalStatus = generalStatus;
    this.foodList = food;
    this.userId = userId;
  }
}
