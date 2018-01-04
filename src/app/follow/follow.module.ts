import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FollowPage } from './follow';
import { FollowService } from './follow.service';

@NgModule({
  declarations: [
    FollowPage
  ],
  imports: [
    CommonModule,
    IonicPageModule.forChild(FollowPage)
  ],
  entryComponents: [
    FollowPage
  ],
  providers:[
    FollowService
  ]
})
export class FollowModule { }
