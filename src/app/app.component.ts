import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { authConfig } from './auth.config';
import { ConfigurationService } from './services/configuration-service';
import { AuthenticationService } from './services/oauth2-authentication.service';
import { ApiEndpointService } from './services/api-endpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  language = 'en-gb';
  trialName = '';

  constructor(appRoot: ElementRef, public authenticationService: AuthenticationService,
              public configurationService: ConfigurationService,
              public apiEndpointService: ApiEndpointService) {
    this.configurationService.init(appRoot);
    this.apiEndpointService.init(this.configurationService.gatewayUrl);
    this.authenticationService.init();
    console.log('AppComponent constructor config', configurationService);
    console.log('AppComponent constructor profileService', this.apiEndpointService.profileEndpoint);
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
