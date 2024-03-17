import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  placeholder: string = 'Enter your username';
  newPassword: string | undefined;
  buttonName: string = 'Update Password';
  newRepeatPassword: string | undefined;
  link: string[] = ['/login'];
  username: string | undefined;
  url: string = 'http://localhost:8080/api/v1/login/forgotpassword/';


  constructor(private http: HttpClient){

  }

  onClick() {

  }


  updatePassword() {
    if (this.newPassword==this.newRepeatPassword){
      const User={
        username: this.username,
        password: this.newPassword
      }
      this.url = this.url +this.username;

      this.http.put(this.url, User).subscribe(
        (response: any) => {
          console.log("Response",response);
          // Do something with the response data here
          if(response){

            console.log(response);
          }
        },
        (error: any) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }
}
