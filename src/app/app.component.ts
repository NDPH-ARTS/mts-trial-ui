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
              public apiEndopintService: ApiEndpointService) {
    this.configurationService.init(appRoot);
    this.apiEndopintService.init(this.configurationService.gatewayUrl);
    this.authenticationService.init();
    console.log('AppComponent constructor config', configurationService);
    console.log('AppComponent constructor profileService', this.apiEndopintService.profileEndpoint);
  }

  private initAuthenticationConfig(appRoot: ElementRef<any>): void {
    const issuer = appRoot.nativeElement.getAttribute('issuer');
    const clientId = appRoot.nativeElement.getAttribute('clientId');

    //  We may be passed some config through the app-root element
    if (issuer != null && issuer.length > 0 && issuer.indexOf('$') !== 0) {
      console.log(`Initing auth service with app-root config - issuer: ${authConfig.issuer} client: ${authConfig.clientId}`);
      authConfig.issuer = issuer;
      authConfig.clientId = clientId;
    } else {
      console.log(`Initing auth service from angular env - issuer: ${environment.issuer} client: ${environment.clientId}`);
    }
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
