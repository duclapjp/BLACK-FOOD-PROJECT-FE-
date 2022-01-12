import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./component/user-account/signup/signup.component";
import {LoginComponent} from "./component/user-account/login/login.component";
import {UploadFileComponent} from "./component/upload-file/upload-file.component";

const routes: Routes = [
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: '', component:LoginComponent},
  {path: 'upload-file', component:UploadFileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
