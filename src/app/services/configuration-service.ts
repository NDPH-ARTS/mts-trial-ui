import { ElementRef, Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { authConfig } from '../auth.config';
import { Claims } from '../model/claim';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  trialName = '--trial name--';
  gatewayUrl = '--not-gateway--';

  // get an attribute from the appRoot, defaulting to the property in env if none
  private static retrieveAttr<T, K extends keyof T>(attrName: K, env: T, appRoot: ElementRef): T[K] {
    const attrValue = appRoot.nativeElement.getAttribute(attrName);
    if (attrValue != null && attrValue.length > 0
      && attrValue.indexOf('{{') !== 0) {
      return attrValue;
    } else {
      return env[attrName];
    }
  }

  init(appRoot: ElementRef): void {
    this.trialName = ConfigurationService.retrieveAttr('trialName', environment, appRoot);
    this.gatewayUrl = ConfigurationService.retrieveAttr('gatewayUrl', environment, appRoot);
  }

  constructor() { }

}

@Injectable({
  providedIn: 'root'
})
export abstract class AuthenticationService {
  abstract init(): void;
  abstract login(): void;
  abstract logout(): void;
  abstract isAuthenticated(): boolean;
  abstract getUsername(): string;
}

export class MockAuthenticationService implements AuthenticationService {
  init(): void {
  }
  login(): void {
  }
  logout(): void {
  }
  isAuthenticated(): boolean {
    return true;
  }
  getUsername(): string {
    return '';
  }
}
