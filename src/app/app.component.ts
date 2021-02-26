import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { authConfig } from './auth.config';
import { ConfigurationService } from './services/configuration-service';
import { AuthenticationService } from './services/oauth2-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  language = 'en-gb';
  trialName = '';

  constructor(appRoot: ElementRef, public authenticationService: AuthenticationService,
              public configurationService: ConfigurationService) {
    this.configurationService.init(appRoot);
    this.authenticationService.init(appRoot);

  }

  logout(): void {
    this.authenticationService.logout();
  }
}
