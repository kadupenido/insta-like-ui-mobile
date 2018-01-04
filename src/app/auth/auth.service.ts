import { config } from './../../global/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private baseUrl = config.baseUrl + '/auth';

  constructor(public http: HttpClient) {
  }

  /**
   * Realiza o login
   * @param data user, password
   */
  public login(data) {

    const url = `${this.baseUrl}/authenticate/`;
    const body = { user: data.user, password: data.password };

    return this.http.post(url, body).toPromise().then((res) => {

      localStorage.setItem(config.tokenName, JSON.stringify(res));

      return { success: true };

    }, (err) => {

      console.error(err);

      return {
        success: false,
        message: err.error.message.message || err.message || err
      };
    });

  }

  /**
   * Realiza o logout
   */
  public logout() {
    localStorage.removeItem(config.tokenName);
  }

  /**
   * Verifica se o usuario esta logado
   */
  public isLoggedIn(): Boolean {

    const token = JSON.parse(localStorage.getItem(config.tokenName));
    return token && new Date(token.exp) > new Date();
  }

  public getToken(): string {
    return JSON.parse(localStorage.getItem(config.tokenName)).token;
  }

}
