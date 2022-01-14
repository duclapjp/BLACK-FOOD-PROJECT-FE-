import {User} from "./User";

export class Card{
  id: number;
  bank: string;
  code: string
  user: any


  constructor(id: number, bank: string, code: string, user: any) {
    this.id = id;
    this.bank = bank;
    this.code = code;
    this.user = user;
  }
}
