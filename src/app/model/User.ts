import {FoodOrder} from "./food-order";

export class User {
  id:number;
  name:string;
  username:string;
  email:string;
  password:string;
  avatar:string;
  dob:any;
  phone:string;
  address:string;
  amount:number;
  point:number;
  status:any;
  restaurantId:number;
  foodOrder: FoodOrder [];
  roles:any[]


  constructor(id: number, name: string, username: string, email: string, password: string, avatar: string, dob: any, phone: string, address: string, amount: number, point: number, status: any, restaurantId: number, foodOrder: FoodOrder[], roles: any[]) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.dob = dob;
    this.phone = phone;
    this.address = address;
    this.amount = amount;
    this.point = point;
    this.status = status;
    this.restaurantId = restaurantId;
    this.foodOrder = foodOrder;
    this.roles = roles;
  }
}
