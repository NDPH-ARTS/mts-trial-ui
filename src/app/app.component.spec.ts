import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { MockAuthenticationService } from './services/oauth2-authentication.mock';
import { AuthenticationService } from './services/oauth2-authentication.service';

describe('AppComponent', () => {
  const mockAuthenticationService = new MockAuthenticationService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthenticationService },
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

  it('should call the translation service to set the default locale', () => {
    const translateService = TestBed.inject(TranslateService);
    const defaultLangSpy = spyOn(translateService, 'setDefaultLang');
    const useSpy = spyOn(translateService, 'use');
    TestBed.createComponent(AppComponent);

    expect(defaultLangSpy).toHaveBeenCalledWith('en-gb');
    expect(useSpy).toHaveBeenCalledWith('en-gb');
  });

  it('should set the current locale to the user\'s stored preference if present', () => {
    const translateService = TestBed.inject(TranslateService);
    const useSpy = spyOn(translateService, 'use');
    spyOn(window.localStorage, 'getItem').and.callFake((s: string) => 'fr-fr');
    TestBed.createComponent(AppComponent);

    expect(useSpy).toHaveBeenCalledWith('fr-fr');
  });

  it('should call the translateService when the user selects a locale', () => {
    const translateService = TestBed.inject(TranslateService);
    const useSpy = spyOn(translateService, 'use');
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.onLocaleChange('de-de');

    expect(useSpy).toHaveBeenCalledWith('de-de');
  });
});
