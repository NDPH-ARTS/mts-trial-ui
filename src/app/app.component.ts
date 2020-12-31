import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OAuthEvent, OAuthService } from 'angular-oauth2-oidc';
import { Observable, Subscription } from 'rxjs';
import { authConfig } from './auth.config';
import { TrialConfig } from './model/trial-config';
import { AuthenticationService } from './services/authentication.service';
import { TrialConfigService } from './services/trial-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  language = 'en-gb';

  constructor(public authenticationService: AuthenticationService, private translate: TranslateService) {
    this.translate.setDefaultLang(this.language);

    this.authenticationService.init();
  }

  switchLanguage(language: string): Observable<any> {
    return this.translate.use(language);
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
