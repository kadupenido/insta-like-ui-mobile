import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MenuController, Nav, Platform } from 'ionic-angular';

import { AuthService } from './auth/auth.service';
import { FollowPage } from './follow/follow';
import { HomePage } from './home/home';
import { LoginPage } from './login/login';

export interface MenuItem {
  title: string;
  component: any;
  setRoot: boolean;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public menu: MenuController,
    public authService: AuthService) {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.appMenuItems = [
        { title: 'Perfil', component: HomePage, icon:'contact', setRoot:true },
        { title: 'Follow', component: FollowPage, icon:'add-circle', setRoot:true },
        { title: 'Unfollow', component: HomePage, icon:'remove-circle', setRoot:true }
      ];

      this.statusBar.styleBlackOpaque();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  public goToHome() {
    this.nav.setRoot(HomePage);
  }

  public logout() {
    this.authService.logout();
    this.nav.setRoot(LoginPage);
    this.menu.enable(false, 'mainMenu');
  }

}
