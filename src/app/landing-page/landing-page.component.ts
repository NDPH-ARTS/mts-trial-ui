import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/oauth2-authentication.service';
import { TrialConfigService } from '../services/http-trial-config-service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent {
  trialName = 'Loading...';

  constructor(public authenticationService: AuthenticationService, private translate: TranslateService,
    private configService: TrialConfigService) {
    configService.getTrialConfig().pipe(first()).subscribe((c) => this.trialName = c.trialName);
  }
}

