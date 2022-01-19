import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import {
  RestaurantOrderListComponent
} from "./component/restaurant/restaurant-order-list/restaurant-order-list.component";
import {RestaurantHomepageComponent} from "./component/restaurant/restaurant-homepage/restaurant-homepage.component";
import {
  RestaurantCreateFoodComponent
} from "./component/restaurant/restaurant-create-food/restaurant-create-food.component";
import {RestaurantEditFoodComponent} from "./component/restaurant/restaurant-edit-food/restaurant-edit-food.component";
import {
  RestaurantDeleteFoodComponent
} from "./component/restaurant/restaurant-delete-food/restaurant-delete-food.component";
import {
  RestaurantOrderDetailComponent
} from "./component/restaurant/restaurant-order-detail/restaurant-order-detail.component";
import {
  RestaurantDetailFoodComponent
} from "./component/restaurant/restaurant-detail-food/restaurant-detail-food.component";
import {
  RestaurantSearchFoodComponent
} from "./component/restaurant/restaurant-search-food/restaurant-search-food.component";
import {PurchaseComponent} from "./component/user/user-profile/purchase/purchase.component";
import {UserOrderComponent} from "./component/user/user-order/user-order.component";
import {ShowRestaurantComponent} from "./component/home/show-restaurant/show-restaurant.component";
import {AdminHomepageComponent} from "./component/admin/admin-homepage/admin-homepage.component";
import {AdminRoleVerifyComponent} from "./component/admin/admin-role-verify/admin-role-verify.component";
import {AdminBusinessVerifyComponent} from "./component/admin/admin-business-verify/admin-business-verify.component";
import {RestaurantCouponListComponent} from "./component/restaurant/restaurant-coupon-list/restaurant-coupon-list.component";
import {RestaurantCouponCreateComponent} from "./component/restaurant/restaurant-coupon-create/restaurant-coupon-create.component";
import {RestaurantCouponDeleteComponent} from "./component/restaurant/restaurant-coupon-delete/restaurant-coupon-delete.component";
import {RestaurantCouponEditComponent} from "./component/restaurant/restaurant-coupon-edit/restaurant-coupon-edit.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'upload-file', component: UploadFileComponent},
  {path: 'food-detail', component: FoodDetailComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'order-bill', component: OrderBillComponent},
  {path: 'order-detail', component: OrderBillComponent},
  {path: 'order-history', component: OrderHistoryComponent},
  {path: 'order-map', component: OrderMapComponent},
  {path: 'order-success', component: OrderSuccessComponent},
  {path: 'restaurant-detail/:id', component: RestaurantDetailComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'restaurant-order-list', component: RestaurantOrderListComponent},
  {path: 'restaurant-create', component: RestaurantCreateComponent},
  {path: 'restaurant-delete', component: RestaurantDeleteComponent},
  {path: 'restaurant-edit', component: RestaurantEditComponent},
  {path: 'restaurant-homepage/:id', component: RestaurantHomepageComponent},
  {path: 'restaurant-create-food', component: RestaurantCreateFoodComponent},
  {path: 'restaurant-edit-food/:id', component: RestaurantEditFoodComponent},
  {path: 'restaurant-delete-food/:id', component: RestaurantDeleteFoodComponent},
  {path: 'restaurant-order-detail/:id', component: RestaurantOrderDetailComponent},
  {path: 'restaurant-detail-food/:id', component: RestaurantDetailFoodComponent},
  {path: 'restaurant-search-food/:id', component: RestaurantSearchFoodComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path:'user-order',component:UserOrderComponent},
  {path:'restaurant-find-Id/:id',component:ShowRestaurantComponent},
  {path:'admin-homepage',component:AdminHomepageComponent},
  {path:'admin-role-verify/:id',component:AdminRoleVerifyComponent},
  {path:'admin-business-verify',component:AdminBusinessVerifyComponent},
  {path: 'restaurant-coupon-list',component: RestaurantCouponListComponent},
  {path: 'restaurant-create-voucher',component: RestaurantCouponCreateComponent},
  {path: 'restaurant-coupon-delete/:id',component: RestaurantCouponDeleteComponent},
  {path: 'restaurant-coupon-edit/:id',component: RestaurantCouponEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
