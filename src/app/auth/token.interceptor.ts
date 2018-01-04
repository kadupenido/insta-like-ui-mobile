import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { config } from '../../global/config';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem(config.tokenName);

        if(!token){
            return next.handle(request);
        }

        request = request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + JSON.parse(token).token
            }
        });

        return next.handle(request);
    }
}
