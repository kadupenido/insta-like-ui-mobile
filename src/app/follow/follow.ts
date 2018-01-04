import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';

import { FollowService } from './follow.service';

@Component({
  templateUrl: 'follow.html'
})
export class FollowPage implements OnInit {

  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public followService: FollowService,
    public loadingCtrl: LoadingController) {

  }

  ngOnInit() {

  }

  /**
   * Cria e moastra o spinner
   */
  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando, aguarde...'
    });

    this.loading.present();
  }

}
