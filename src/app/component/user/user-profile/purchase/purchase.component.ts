import { Component, OnInit } from '@angular/core';
import {Card} from "../../../../model/Card";
import {CardService} from "../../../../service/card.service";
import {TokenService} from "../../../../service/token.service";
import {Purchase} from "../../../../model/Purchase";
import {UserService} from "../../../../service/user.service";
import {User} from "../../../../model/User";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  // @ts-ignore
  user: User={};
  amount: number = 0;
  form: any = {}
  // @ts-ignore
  card: Card = {
  }
  // @ts-ignore
  purchase: Purchase = {}
  constructor(
    private cardService: CardService,
    private tokenService: TokenService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getCardByUser_id();
  }

  checkCard() {
    // let userId =this.tokenService.getUserId();
    // this.cardService.findByUser_Id(userId).subscribe(card => {
    //   this.card = card;
    //   console.log('card: ' + card);
    // })
    this.purchase = {
      amount:this.form.amount,
    };
    console.log('purchase: ' + JSON.stringify(this.purchase));
   if (this.card.bank === this.form.bank && this.card.code === this.form.code){
     this.userService.purchase(this.purchase).subscribe(data => {
       console.log(data);
       this.user = data;
       alert('Purchase Success!');
     });
   }
   else {
     alert("Purchase failed! code or bank is incorrect. Please try again!");
   }
  }
  getCardByUser_id(){
    let userId = this.tokenService.getUserId()
    console.log('userId: ' + userId);
    this.cardService.findByUser_Id(userId).subscribe( card => {
      this.card = card;
      console.log('card: ' + JSON.stringify(this.card));
    })
  }

}
