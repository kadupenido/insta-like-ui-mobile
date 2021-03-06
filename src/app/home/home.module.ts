import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import { HomeService } from './home.service';

@NgModule({
  declarations: [
      HomePage
  ],
  imports: [
    CommonModule,
    IonicPageModule.forChild(HomePage)
  ],
  entryComponents: [
    HomePage
  ],
  providers:[
    HomeService
  ]
})
export class HomeModule { }
