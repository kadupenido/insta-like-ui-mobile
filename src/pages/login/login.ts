import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController, NavParams, AlertController, Loading, Alert } from 'ionic-angular';

import { LoginProvider } from './../../providers/login/login';
import { HomePage } from './../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  login: { user: String, password: String } = { user: '', password: '' };
  loading: Loading;
  alert: Alert;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public loginProvider: LoginProvider,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
  }

  ngOnInit() {



    //Desabilita o menu
    this.menu.enable(false, 'mainMenu');

    //Verifica se esta logado para redirecionar para a home
    this.loginProvider.isLoggedIn().then((logged) => {

      if (logged) this.redirectHome();


    });
  }

  /**
   * Login
   */
  loginForm() {

    //Mostra o spinner
    this.showLoading();

    //Realiza o login
    this.loginProvider.login(this.login).then((res: any) => {

      //Remove o spinner
      this.loading.dismiss();

      if (res.success) {
        this.redirectHome();
      } else {
        this.showAlert(res.message);
      }

    });
  }

  /**
   * Redireciona para a home
   */
  private redirectHome() {
    this.menu.enable(true, 'mainMenu');
    this.navCtrl.setRoot(HomePage);
  }

  /**
   * Cria e moastra o spinner
   */
  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando, aguarde...',
      dismissOnPageChange: true
    });

    this.loading.present();
  }

  /**
   * Cria o mostra o toast
   * @param msg mensagem a ser exibida
   */
  private showAlert(msg) {

    this.alert = this.alertCtrl.create({
      title: 'Erro ao efetuar login',
      subTitle: msg,
      buttons: ['OK']
    });

    this.alert.present();
  }

}