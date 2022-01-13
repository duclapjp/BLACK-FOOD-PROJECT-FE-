import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./component/user/signup/signup.component";
import {LoginComponent} from "./component/user/login/login.component";
import {UploadFileComponent} from "./component/upload-file/upload-file.component";
import {FoodDetailComponent} from "./component/food/food-detail/food-detail.component";
import {HomePageComponent} from "./component/home/home-page/home-page.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {OrderBillComponent} from "./component/order/order-bill/order-bill.component";
import {OrderHistoryComponent} from "./component/order/order-history/order-history.component";
import {OrderMapComponent} from "./component/order/order-map/order-map.component";
import {OrderSuccessComponent} from "./component/order/order-success/order-success.component";
import {RestaurantDetailComponent} from "./component/restaurant/restaurant-detail/restaurant-detail.component";
import {RestaurantCreateComponent} from "./component/restaurant/restaurant-create/restaurant-create.component";

const routes: Routes = [
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: '', component:LoginComponent},
  {path: 'upload-file', component:UploadFileComponent},
  {path: 'food-detail', component:FoodDetailComponent},
  {path: 'home-page', component:HomePageComponent},
  {path: 'not-found', component:NotFoundComponent},
  {path: 'order-bill', component:OrderBillComponent},
  {path: 'order-detail', component:OrderBillComponent},
  {path: 'order-history', component:OrderHistoryComponent},
  {path: 'order-map', component:OrderMapComponent},
  {path: 'order-success', component:OrderSuccessComponent},
  {path: 'restaurant-detail', component:RestaurantDetailComponent},
  {path: 'restaurant-create', component:RestaurantCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
