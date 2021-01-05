import { TestBed } from '@angular/core/testing';
import { OAuthService } from 'angular-oauth2-oidc';

import { OAuth2AuthenticationService } from './oauth2-authentication.service';

describe('OAuth2AuthenticationService', () => {
  let service: OAuth2AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: OAuthService, useValue: {} as OAuthService }
      ]
    });
    service = TestBed.inject(OAuth2AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
