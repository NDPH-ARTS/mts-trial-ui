import { Component } from '@angular/core';
import { AuthenticationService } from '../services/oauth2-authentication.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent {
  trialName = 'Test trial';

  constructor(public authenticationService: AuthenticationService) {
  }
}

