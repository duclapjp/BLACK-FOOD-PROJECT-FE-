import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/user/login/login.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { UploadFileComponent } from './component/upload-file/upload-file.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatError, MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { NotFoundComponent } from './component/not-found/not-found.component';
import { OrderDetailComponent } from './component/order/order-detail/order-detail.component';
import { FoodDetailComponent } from './component/food/food-detail/food-detail.component';
import { RestaurantDetailComponent } from './component/restaurant/restaurant-detail/restaurant-detail.component';
import { HomePageComponent } from './component/home/home-page/home-page.component';
import { OrderBillComponent } from './component/order/order-bill/order-bill.component';
import { OrderHistoryComponent } from './component/order/order-history/order-history.component';
import { OrderSuccessComponent } from './component/order/order-success/order-success.component';
import { OrderMapComponent } from './component/order/order-map/order-map.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { UserProfileComponent } from './component/user/user-profile/user-profile.component';
import { RestaurantCreateComponent } from './component/restaurant/restaurant-create/restaurant-create.component';
import { RestaurantDeleteComponent } from './component/restaurant/restaurant-delete/restaurant-delete.component';
import { RestaurantEditComponent } from './component/restaurant/restaurant-edit/restaurant-edit.component';
import { RestaurantListComponent } from './component/restaurant/restaurant-list/restaurant-list.component';
import {RestaurantOrderListComponent} from "./component/restaurant/restaurant-order-list/restaurant-order-list.component";
import { RestaurantHomepageComponent } from './component/restaurant/restaurant-homepage/restaurant-homepage.component';
import { RestaurantClaimComponent } from './component/restaurant/restaurant-claim/restaurant-claim.component';
import { RestaurantCreateFoodComponent } from './component/restaurant/restaurant-create-food/restaurant-create-food.component';
import { RestaurantEditFoodComponent } from './component/restaurant/restaurant-edit-food/restaurant-edit-food.component';
import { RestaurantDeleteFoodComponent } from './component/restaurant/restaurant-delete-food/restaurant-delete-food.component';
import { RestaurantOrderDetailComponent } from './component/restaurant/restaurant-order-detail/restaurant-order-detail.component';
import { RestaurantDetailFoodComponent } from './component/restaurant/restaurant-detail-food/restaurant-detail-food.component';
import { RestaurantSearchFoodComponent } from './component/restaurant/restaurant-search-food/restaurant-search-food.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UploadFileComponent,
    NotFoundComponent,
    OrderDetailComponent,
    FoodDetailComponent,
    RestaurantDetailComponent,
    HomePageComponent,
    OrderBillComponent,
    OrderHistoryComponent,
    OrderSuccessComponent,
    OrderMapComponent,
    UserProfileComponent,
    RestaurantCreateComponent,
    RestaurantDeleteComponent,
    RestaurantEditComponent,
    RestaurantListComponent,
    RestaurantOrderListComponent,
    RestaurantHomepageComponent,
    RestaurantClaimComponent,
    RestaurantCreateFoodComponent,
    RestaurantHomepageComponent,
    RestaurantEditFoodComponent,
    RestaurantDeleteFoodComponent,
    RestaurantOrderDetailComponent,
    RestaurantDetailFoodComponent,
    RestaurantSearchFoodComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatProgressSpinnerModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
