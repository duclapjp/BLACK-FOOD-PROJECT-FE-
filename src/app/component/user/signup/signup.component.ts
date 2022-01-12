import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "../../../service/auth.service";
import {SignUpForm} from "../../../model/SignUpForm";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {

  status = 'Please fill in the form to register!';
  hide = true;
  form: any ={};
  subscription: Subscription|undefined;
  // @ts-ignore
  signUpForm: SignUpForm ;

  error1 : any = {
    message: "Username was exists!"
  }

  error2 : any = {
    message: "Email was exists!"
  }
  success : any = {
    message: "Signup Success!"
  }


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }

  ngSubmit() {
    // @ts-ignore
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    )
    console.log('user: ' +this.signUpForm);

    this.subscription = this.authService.signup(this.signUpForm).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.error1)){
        this.status = "The username has exists!";
      }
      if (JSON.stringify(data) == JSON.stringify(this.error2)){
        this.status = "The email has exists!";
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)){
        this.status = "Register has Success!";
        console.log('status' + this.status);
      }
      // @ts-ignore
      console.log(`data: ` +JSON.stringify(data.message));
    },error => {
      this.authService.handleError(error);
    });
  }
}
