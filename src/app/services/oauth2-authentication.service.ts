import { ElementRef, Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { authConfig } from '../auth.config';
import { Claims } from '../model/claim';

@Injectable({
  providedIn: 'root'
})
export class OAuth2AuthenticationService implements AuthenticationService {
  private oauthEvents: any;

  init(appRoot: ElementRef): void {
    const issuer = appRoot.nativeElement.getAttribute('issuer');
    const clientId = appRoot.nativeElement.getAttribute('clientId');

    //  We may be passed some config through the app-root element
    if (issuer != null && issuer.length > 0 && issuer.indexOf('{{') !== 0) {
      console.log(`Initing auth service with app-root config - issuer: ${authConfig.issuer} client: ${authConfig.clientId}`);
      authConfig.issuer = issuer;
      authConfig.clientId = clientId;
    } else {
      console.log(`Initing auth service from angular env - issuer: ${environment.issuer} client: ${environment.clientId}`);
    }

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

  getIDToken() : string {
    return this.oauthService.getIdToken();
  }

  constructor(private oauthService: OAuthService) { }
}

@Injectable({
  providedIn: 'root'
})
export abstract class AuthenticationService {
  abstract init(appRoot: ElementRef): void;
  abstract login(): void;
  abstract logout(): void;
  abstract isAuthenticated(): boolean;
  abstract getUsername(): string;
  abstract getIDToken(): string;
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
  getIDToken(): string {
    return '';
  }
}
