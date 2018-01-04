import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    IonicPageModule.forChild(LoginPage)
  ],
  entryComponents: [
    LoginPage
  ]
})
export class LoginModule { }
