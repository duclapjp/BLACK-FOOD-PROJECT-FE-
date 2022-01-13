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
import {UserProfileComponent} from "./component/user/user-profile/user-profile.component";
import {RestaurantCreateComponent} from "./component/restaurant/restaurant-create/restaurant-create.component";
import {RestaurantDeleteComponent} from "./component/restaurant/restaurant-delete/restaurant-delete.component";
import {RestaurantEditComponent} from "./component/restaurant/restaurant-edit/restaurant-edit.component";
import {RestaurantOrderListComponent} from "./component/restaurant/restaurant-order-list/restaurant-order-list.component";
import {RestaurantHomepageComponent} from "./component/restaurant/restaurant-homepage/restaurant-homepage.component";

const routes: Routes = [
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: '', component:HomePageComponent},
  {path: 'upload-file', component:UploadFileComponent},
  {path: 'food-detail', component:FoodDetailComponent},
  {path: 'not-found', component:NotFoundComponent},
  {path: 'order-bill', component:OrderBillComponent},
  {path: 'order-detail', component:OrderBillComponent},
  {path: 'order-history', component:OrderHistoryComponent},
  {path: 'order-map', component:OrderMapComponent},
  {path: 'order-success', component:OrderSuccessComponent},
  {path: 'restaurant-detail', component:RestaurantDetailComponent},
  {path: 'user-profile', component:UserProfileComponent},
  {path: 'restaurant-order-list', component:RestaurantOrderListComponent},
  {path: 'restaurant-create', component:RestaurantCreateComponent},
  {path: 'restaurant-delete',component:RestaurantDeleteComponent},
  {path: 'restaurant-edit',component:RestaurantEditComponent},
  {path:'restaurant-homepage', component:RestaurantHomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
