import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AuthenticationService, MockAuthenticationService } from './services/oauth2-authentication.service';

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
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(spy).toHaveBeenCalled();
  });

  it('should set the TranslateService default locale', () => {
    const spy = spyOn(mockTranslateService, 'setDefaultLang');
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(spy).toHaveBeenCalledWith('en-gb');
  });

  it('should call TranslateService to change the current language', () => {
    const spy = spyOn(mockTranslateService, 'use');
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.switchLanguage('fr-fr');
    expect(spy).toHaveBeenCalledWith('fr-fr');
  });

});
