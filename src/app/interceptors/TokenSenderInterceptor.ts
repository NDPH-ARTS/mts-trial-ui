import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/oauth2-authentication.service";


@Injectable()
export class TokenSenderInterceptor implements HttpInterceptor {

  constructor(public authenticationService: AuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    if(this.authenticationService.isAuthenticated()){
     const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer '+ this.authenticationService.getIDToken())
     });

      console.log("Interceptor added token to  " + authReq.url);
      console.log(authReq)

      return next.handle(authReq);

    }else{
      console.log("Interceptor did not add token to " + req.url);
      return next.handle(req);
    }


  }
}
