import { Component } from '@angular/core';
import { ConfigurationService } from '../services/configuration-service';
import { AuthenticationService } from '../services/oauth2-authentication.service';
import { Profile } from '../Profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent {
  constructor(public authenticationService: AuthenticationService, public configSerice: ConfigurationService, private profileService: ProfileService) {
  }

  profile! : Profile;

  displayProfile() : void {
    this.profileService.getProfile()
      .subscribe (loadedProfile => this.profile=loadedProfile);
  }

}

