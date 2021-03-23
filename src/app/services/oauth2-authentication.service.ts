import { ElementRef, Injectable } from '@angular/core';
import {AuthConfig, OAuthEvent, OAuthService} from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import {authConfigESig, authConfigStandard} from '../auth.config';
import { Claims } from '../model/claim';
import { ConfigurationService } from './configuration-service';

@Injectable({
  providedIn: 'root'
})
export class OAuth2AuthenticationService implements AuthenticationService {

  constructor(private oauthService: OAuthService, private configurationService: ConfigurationService) {}

  public init(authConfig: AuthConfig): void {
    authConfig.issuer = this.configurationService.issuer;
    authConfig.clientId = this.configurationService.clientId;
    this.oauthService.configure(authConfig);
    this.logTokenReceivedEvents()
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
      .catch(() => console.log('OAuth2AuthenticationService: loadDiscoveryDocumentAndLogin fetch failed'));
  }

  logTokenReceivedEvents() : void {
    this.oauthService.events.subscribe(({ type }: OAuthEvent) => {

      if (type == "token_received") {
        console.info("new auth token received: "+this.oauthService.getAccessToken());
      }
    });
  }

  login(): void {
    this.init(authConfigStandard);
    this.oauthService.initCodeFlow();
  }
  loginEsigPoC(): void {
    this.init(authConfigESig);
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
  abstract init(authConfig: AuthConfig): void;
  abstract login(): void;
  abstract loginEsigPoC(): void;
  abstract logout(): void;
  abstract isAuthenticated(): boolean;
  abstract getIDToken(): string;
}
