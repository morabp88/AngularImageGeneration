import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputstyleDirective } from './customdirectives/inputstyle.directive';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {HomeComponent} from "./home/home.component";
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes=[
  {path:'', component:HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'**', component:PagenotfoundComponent}  // for the paths that are not there in the app. needs to be at last

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InputstyleDirective,
    PagenotfoundComponent,
    ForgotpasswordComponent,
    SignupComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
      RouterModule
    ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
