import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { TrialConfigService } from '../services/trial-config.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent {
  trialName = 'Loading...';

  constructor(public authenticationService: AuthenticationService, private translate: TranslateService,
    private configService: TrialConfigService) {
    configService.trialConfig.pipe(first()).subscribe((c) => this.trialName = c.trialName);
  }
}

