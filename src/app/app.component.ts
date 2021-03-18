import { Component, ElementRef } from '@angular/core';
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
    this.authenticationService.init();
    console.log('AppComponent constructor config', configurationService);
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
