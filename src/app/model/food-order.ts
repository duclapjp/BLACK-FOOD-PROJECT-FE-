import {Food} from "./food";

export interface FoodOrder {
  id: number;
  time: any;
  totalPrice: number;
  note: string;
  generalStatus:any;
  user: any;
  food: Food[]
}
