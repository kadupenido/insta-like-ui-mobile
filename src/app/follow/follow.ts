import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';

import { FollowService } from './follow.service';
import { LocationSearchPage } from './location-search';

@Component({
  templateUrl: 'follow.html'
})
export class FollowPage implements OnInit {

  loading: Loading;
  followFrm: {
    seguirPor: number,
    locationName: string,
    locationId: number,
    hashtag: string,
    genero: number,
    quantidade: number
  } = {
    seguirPor: 1,
    locationName: '',
    locationId: 0,
    hashtag: '',
    genero: 0,
    quantidade: 0
  };

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

  public follow() {

  }

  public async openLocationSearch() {
    await this.navCtrl.push(LocationSearchPage, {
      form: this.followFrm
    });
  }
}
