import { config } from './../../global/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LoginProvider {

  private tokenName: String = 'ilToken';
  private baseUrl = config.baseUrl + '/auth';

  constructor(public http: HttpClient, private storage: Storage) {
  }

  public login(data) {

    const url = `${this.baseUrl}/authenticate/`;
    const body = { user: data.user, password: data.password };

    return this.http.post(url, body).toPromise().then((res) => {

      console.log(res);
      return {
        success: false
      };

    }, (err) => {

      console.error(err);

      return {
        success: false,
        message: err.error.message.message || err.message || err
      };

    });

  }

  /**
   * Verifica se o usuario esta logado
   */
  public isLoggedIn(): Promise<Boolean> {

    return this.storage.get('ilToken').then((val) => {

      return false;
    }, (err) => {
      console.error(err);
      return false;
    });
  }

}
