import { Component } from '@angular/core';
import { AuthenticationService } from './services/oauth2-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  language = 'en-gb';

  constructor(public authenticationService: AuthenticationService) {
    this.authenticationService.init();
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
