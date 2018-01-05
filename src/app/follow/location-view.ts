import { LocationService } from './location-service';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Loading, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  templateUrl: 'location-view.html'
})
export class LocationViewPage implements OnInit {

  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public LocationService: LocationService) {

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
