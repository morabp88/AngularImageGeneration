import {Component, ElementRef, Renderer2, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  buttonName: string = 'Login';
  isLoggedIn: Boolean = false;
  placeholder: string = 'Enter username';
  userNameText: string = '';
  password: string = '';
  disabled: boolean = true;
  constructor(private http: HttpClient) {
    this.userNameText='';
    this.password='';
  }

  ngOnInit() {
    this.isLoggedIn ? this.buttonName = 'Logout' : this.buttonName = 'login'
  }

  onLoginClick(name: string) {
    console.log(this.userNameText + '  ' + this.password)
      this.http.get('http://localhost:8080/api/v1/login?userName='+this.userNameText+`&password=${this.password}`).subscribe(
        (response: any) => {
          console.log("Response",response);
          // Do something with the response data here
          if(response){
            this.isLoggedIn=true;
            this.buttonName='Logout';
          }
        },
        (error: any) => {
          console.error('Error fetching data:', error);
        }
      );

  }

  ngOnChanges(changes: SimpleChanges) {
    // This method will be called whenever the value of any @Input property changes
    console.log('New value:', changes.toString());

  }
 /* ngAfterContentChecked() {
    console.log("My value", this.userNameText, this.password);

    if (this.userNameText ==='' && this.password === '') {
      console.log(this.disabled);
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }*/
  // onChange() {
  //   console.log("In onchange", this.userNameText);
  //   this.disabled = this.userNameText === '' ||  this.password ==='';
  // }
  onLogoutClick(pavan: string) {
    this.isLoggedIn=false;
    this.buttonName='Login';
    this.userNameText='';
    this.password='';
  }
}
