import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';

import { HomeService } from './home.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  loading: Loading;
  me: {} = {}

  constructor(
    public navCtrl: NavController,
    public homeService: HomeService,
    public loadingCtrl: LoadingController) {

  }

  ngOnInit() {

    this.showLoading();

    this.homeService.me().then((res: any) => {

      if (res.success) {
        this.me = res.data
      } else {

      }

      this.loading.dismiss();

    });
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
