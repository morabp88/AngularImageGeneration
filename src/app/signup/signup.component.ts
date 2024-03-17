import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userNameText: String | undefined;
  placeholder: String = 'Enter username';
  password: String | undefined;
  buttonName: String = 'Sign up';
  reenterPassword: String | undefined;
  url: string ='http://localhost:8080/api/v1/signup';
  body: { _password: String | undefined; _username: String | undefined; } | undefined;


  constructor(private http: HttpClient) {
  }

  onSignupClick(event: string) {
    const User={
      username: this.userNameText,
      password: this.password
    }
    console.log('Body of the request is: ' + User);
    this.http.post(this.url,User, {
      headers : new HttpHeaders({"Content-Type": "application/json"})
    }).subscribe(
      (response: any) => {
        console.log("Response",response);
        // Do something with the response data here
        if(response){


        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    )
  }
}
