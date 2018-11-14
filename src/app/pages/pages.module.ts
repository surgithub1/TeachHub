import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent, 
    SignupComponent, 
    NotFoundComponent,
  ]
})
export class PagesModule { }
