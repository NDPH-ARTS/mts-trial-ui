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

  init(appRoot: ElementRef): void {
    const trialNameAttribute = appRoot.nativeElement.getAttribute('trialName');

    if (trialNameAttribute != null && trialNameAttribute.length > 0
      && trialNameAttribute.indexOf('{{') !== 0) {
      this.trialName = trialNameAttribute;
    } else {
      this.trialName = environment.trialName;
    }
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
