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
import {MatFormFieldModule} from "@angular/material/form-field";
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
    OrderMapComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
