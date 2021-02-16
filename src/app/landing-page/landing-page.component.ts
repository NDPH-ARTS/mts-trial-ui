import { Component } from '@angular/core';
import { ConfigurationService } from '../services/configuration-service';
import { AuthenticationService } from '../services/oauth2-authentication.service';
import { Profile } from '../model/Profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent {
  constructor(public authenticationService: AuthenticationService, public configSerice: ConfigurationService, private profileService: ProfileService) {
  }

  profile! : Profile;

  displayProfile(oid: String) : void {
    this.profileService.getProfile(oid)
      .subscribe (loadedProfile => this.profile=loadedProfile);
  }

}

