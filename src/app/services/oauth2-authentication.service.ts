import { ElementRef, Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { authConfig } from '../auth.config';
import { Claims } from '../model/claim';
import { ConfigurationService } from './configuration-service';

@Injectable({
  providedIn: 'root'
})
export class OAuth2AuthenticationService implements AuthenticationService {

  constructor(private oauthService: OAuthService, private configurationService: ConfigurationService) {}

  public init(): void {
    authConfig.issuer = this.configurationService.issuer;
    authConfig.clientId = this.configurationService.clientId;

    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
      .catch(() => console.log('OAuth2AuthenticationService: loadDiscoveryDocumentAndLogin fetch failed'));
  }

  login(): void {
    this.oauthService.initCodeFlow();
  }

  logout(): void {
    this.oauthService.logOut();
  }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidIdToken();
  }

  getIDToken(): string {
    return this.oauthService.getIdToken();
  }
}

@Injectable({
  providedIn: 'root'
})
export abstract class AuthenticationService {
  abstract init(): void;
  abstract login(): void;
  abstract logout(): void;
  abstract isAuthenticated(): boolean;
  abstract getIDToken(): string;
}
