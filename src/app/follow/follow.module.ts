import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FollowPage } from './follow';
import { FollowService } from './follow.service';
import { LocationSearchPage } from './location-search';
import { LocationService } from './location-service';
import { LocationViewPage } from './location-view';

@NgModule({
  declarations: [
    FollowPage,
    LocationSearchPage,
    LocationViewPage
  ],
  imports: [
    CommonModule,
    IonicPageModule.forChild(FollowPage)
  ],
  entryComponents: [
    FollowPage,
    LocationSearchPage,
    LocationViewPage
  ],
  providers:[
    FollowService,
    LocationService
  ]
})
export class FollowModule { }
