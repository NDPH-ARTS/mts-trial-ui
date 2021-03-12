import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardService } from './auth-guard.service';
import { MockAuthenticationService } from './oauth2-authentication.mock';
import { AuthenticationService } from './oauth2-authentication.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let mockAuthenticationService: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuardService,
        { provide: AuthenticationService, useClass: MockAuthenticationService }
      ]
    });
    service = TestBed.inject(AuthGuardService);
    mockAuthenticationService = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the authenticationService', () => {
    const spy = spyOn(mockAuthenticationService, 'isAuthenticated').and.returnValue(false);
    expect(service.canActivate()).toBe(false);
    expect(spy).toHaveBeenCalled();
  });
});
