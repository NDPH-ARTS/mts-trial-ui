import { Component, ElementRef } from '@angular/core';
import { ConfigurationService } from './services/configuration-service';
import { AuthenticationService } from './services/oauth2-authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { Locale } from './model/locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  trialName = '';
  locales: Locale[] = [{ key: 'en-gb', name: 'English (UK)'}, { key: 'en-xx', name: 'Test'}];
  currentLocale = 'en-gb';
  defaultLocale = 'en-gb';

  appitems = [
    {
      label: 'Home',
      link: '/landing',
      faIcon: 'fas fa-home'
    },
    {
      label: 'Admin',
      link: '/landing',
      faIcon: 'fas fa-user-cog'
    },
    {
      label: 'Sites',
      faIcon: 'fas fa-sitemap',
      items: [
        {
          label: 'Assigned Sites',
          link: '/assigned-sites',
          icon: 'favorite'
        },
        {
          label: 'Admin Sites',
          link: '/admin-sites',
          icon: 'favorite_border'
        }
      ]
    },
    {
      label: 'About',
      link: '/about',
      faIcon: 'fas fa-info'
    },
    {
      label: 'Item 4',
      link: '/item-4',
      icon: 'star_rate',
      hidden: true
    }
  ];

  config = {
    paddingAtStart: true,
    classname: 'my-custom-class',
    listBackgroundColor: 'rgb(208, 241, 239)',
    fontColor: 'rgb(8, 54, 71)',
    backgroundColor: 'rgb(208, 241, 239)',
    selectedListFontColor: 'red',
  };


  constructor(appRoot: ElementRef, public authenticationService: AuthenticationService,
              public configurationService: ConfigurationService,
              public translateService: TranslateService) {
    this.configurationService.init(appRoot);
    this.authenticationService.init();

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang(this.defaultLocale);

    const localePreference = localStorage.getItem('currentLocale');
    this.currentLocale = localePreference != null ? localePreference : this.defaultLocale;

    this.translateService.use(this.currentLocale);

    console.log('AppComponent constructor config', configurationService);
  }

  onLocaleChange(e: string): void {
    this.translateService.use(e);
    localStorage.setItem('currentLocale', e);
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
