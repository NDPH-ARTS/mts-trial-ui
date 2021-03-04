import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { MockAuthenticationService } from './services/oauth2-authentication.mock';
import { AuthenticationService } from './services/oauth2-authentication.service';

describe('AppComponent', () => {
  const mockAuthenticationService = new MockAuthenticationService();
  const mockTranslateService = {
    setDefaultLang: (s: string) => { },
    use: (s: string) => of(s)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthenticationService },
        { provide: TranslateService, useValue: mockTranslateService },

      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialise the authentication service', () => {
    const spy = spyOn(mockAuthenticationService, 'init');
    TestBed.createComponent(AppComponent);

    expect(spy).toHaveBeenCalled();
  });

  it('should call logout on the authentication service', () => {
    const spy = spyOn(mockAuthenticationService, 'logout');
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.logout();

    expect(spy).toHaveBeenCalled();
  });
});
