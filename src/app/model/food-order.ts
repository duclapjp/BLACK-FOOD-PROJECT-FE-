import {Food} from "./food";
import {Restaurant} from "./restaurant";

export interface FoodOrder {
  id: number;
  time: any;
  totalPrice: number;
  note: string;
  generalStatus:any;
  food: Food[];
  user: any;
  restaurant: Restaurant;
}
