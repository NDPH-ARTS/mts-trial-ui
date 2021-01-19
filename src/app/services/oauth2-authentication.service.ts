import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../auth.config';
import { Claims } from '../model/claim';

@Injectable({
  providedIn: 'root'
})
export class OAuth2AuthenticationService implements AuthenticationService {
  private oauthEvents: any;

  init(): void {
    console.log(authConfig);
    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().catch(() => console.log('==== API ==============> loadDiscoveryDocumentAndLogin fetch failed'));
    this.oauthEvents = this.oauthService.events.subscribe(() => this.getUsername());
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

  getUsername(): string {
    const claims: Claims = this.oauthService.getIdentityClaims() as Claims;
    if (claims != null) {
      return claims.name;
    }

    return '';
  }

  constructor(private oauthService: OAuthService) { }
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
