import {Food} from "./food";


export class FoodOrder {
  id: number;
  time: any;
  totalPrice: number;
  note: string;
  generalStatus:any;
  food: Food[];
  user: any;


  constructor(id: number, time: any, totalPrice: number, note: string, generalStatus: any, food: Food[], user: any) {
    this.id = id;
    this.time = time;
    this.totalPrice = totalPrice;
    this.note = note;
    this.generalStatus = generalStatus;
    this.food = food;
    this.user = user;
  }

}
