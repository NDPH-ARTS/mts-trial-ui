import { Component, DoCheck } from '@angular/core';
import { ConfigurationService } from '../services/configuration-service';
import { AuthenticationService } from '../services/oauth2-authentication.service';
import { Profile } from '../model/Profile';
import { ProfileService } from '../services/profile.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements DoCheck {
  profiles!: Profile[] ;
  profilesState: State = State.init;
  State = State;

  constructor(public authenticationService: AuthenticationService,
              public configService: ConfigurationService,
              private profileService: ProfileService) {
  }

  ngDoCheck(): void {
    if (this.authenticationService.isAuthenticated() && this.profilesState === State.init){
      this.showProfiles();
    }
  }

  showProfiles(): void {
    this.profileService.getProfiles()
      .pipe(first()).subscribe (
        (loadedProfiles: Profile[]) => {
          this.profiles = loadedProfiles;
          this.profilesState = loadedProfiles.length === 0 ?  State.failed : State.success;
        },
      err => {
        this.profilesState = State.failed;
        }
      );
  }

}
export enum State {
  init,
  success,
  failed,
}

