import { Component } from '@angular/core';
import { ConfigurationService } from '../services/configuration-service';
import { AuthenticationService } from '../services/oauth2-authentication.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent {
  constructor(public authenticationService: AuthenticationService, public configSerice: ConfigurationService) {
  }
}

