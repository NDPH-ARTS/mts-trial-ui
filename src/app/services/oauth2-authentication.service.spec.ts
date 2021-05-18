import { TestBed } from '@angular/core/testing';
import { OAuthEvent, OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration-service';
import { MockConfigurationService } from './configuration-service.mock';
import { OAuth2AuthenticationService } from './oauth2-authentication.service';

describe('OAuth2AuthenticationService', () => {
  let service: OAuth2AuthenticationService;
  let configurationService: ConfigurationService;

  const mockBackend = {
    configure: (config: any) => {},
    setupAutomaticSilentRefresh: () => {},
    loadDiscoveryDocumentAndTryLogin: () => Promise.resolve(true),
    events: new Observable<OAuthEvent>(),
    initCodeFlow: () => {},
    logOut: () => {},
    hasValidIdToken: () => false,
    getAccessToken: () => ''
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: OAuthService, useValue: mockBackend },
        { provide: ConfigurationService, useClass: MockConfigurationService },
      ]
    });
    service = TestBed.inject(OAuth2AuthenticationService);
    configurationService = TestBed.inject(ConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the configuration service', () => {
    configurationService.clientId = 'fake-client-id';
    configurationService.issuer = 'fake-issuer';

    const spy = spyOn(mockBackend, 'configure');

    service.init();

    expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({ clientId: configurationService.clientId}));
    expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({ issuer: configurationService.issuer}));
  });

  it('should call the backend on login', () => {
    spyOn(mockBackend, 'initCodeFlow');
    service.login();

    expect(mockBackend.initCodeFlow).toHaveBeenCalled();
  });

  it('should call the backend on logout', () => {
    spyOn(mockBackend, 'logOut');
    service.logout();

    expect(mockBackend.logOut).toHaveBeenCalled();
  });

  it('should call the backend to check for a valid token', () => {
    spyOn(mockBackend, 'hasValidIdToken');
    service.isAuthenticated();

    expect(mockBackend.hasValidIdToken).toHaveBeenCalled();
  });

  it('fetch the id token from the backend', () => {
    spyOn(mockBackend, 'getAccessToken');
    service.getAccessToken();

    expect(mockBackend.getAccessToken).toHaveBeenCalled();
  });
});
