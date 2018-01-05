import { LocationService } from './location-service';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Loading, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  templateUrl: 'location-search.html'
})
export class LocationSearchPage implements OnInit {

  loading: Loading;
  localName: string;

  locations: any;

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

  /**
   * Busca os locais
   */
  public buscarLocal() {
    this.showLoading();

    this.LocationService.buscarLocais(this.localName).then((res: any) => {

      this.loading.dismiss();

      if (res.success) {
        this.locations = res.data;
      } else {

      }
    });
  }

  public async selecionarLocal(local) {
    this.navParams.data.form.locationName = local.title;
    this.navParams.data.form.locationId = local.id;
    this.navCtrl.pop();
  }

  public visualizarLocal(local) {
    console.log(local.id)
  }

}
