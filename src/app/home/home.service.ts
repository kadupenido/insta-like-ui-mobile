import { config } from './../../global/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  private baseUrl = config.baseUrl + '/user';

  constructor(public http: HttpClient) {
  }

  public me() {

    const url = `${this.baseUrl}/me/`;

    return this.http.get(url).toPromise().then((res) => {

      return { 
          success: true,
          data: res
         };

    }, (err) => {

      console.error(err);

      return {
        success: false,
        message: err.error.message.message || err.message || err
      };
    });

  }
}
