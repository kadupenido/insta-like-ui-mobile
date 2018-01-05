import { config } from './../../global/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {

  private baseUrl = config.baseUrl + '/location';

  constructor(public http: HttpClient) {
  }

  /**
   * Busca as localizações
   */
  public buscarLocais(nome) {

    const url = `${this.baseUrl}/getLocationsByName/`;
    const body = { locationName: nome };

    return this.http.post(url, body).toPromise().then((res) => {

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

  public buscarMedias(locationId, cursor) {

    const url = `${this.baseUrl}/getMediaByLocation/`;
    const body = { locationId: locationId, cursor: cursor };

    return this.http.post(url, body).toPromise().then((res: any) => {

      return { 
        success: true,
        cursor: res.cursor,
        data: res.data
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
