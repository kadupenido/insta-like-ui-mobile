import { config } from './../../global/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FollowService {

  private baseUrl = config.baseUrl + '/follow';

  constructor(public http: HttpClient) {
  }
}
