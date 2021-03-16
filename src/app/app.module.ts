import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthenticationService, OAuth2AuthenticationService } from './services/oauth2-authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenSenderInterceptor } from './interceptors/TokenSenderInterceptor';
import { SitesViewComponent } from './components/sites-view/sites-view.component';
import { AssignedSitesPageComponent } from './assigned-sites-page/assigned-sites-page.component';

export const storageFactory = () => localStorage;
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AssignedSitesPageComponent,
    SitesViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [''],
        sendAccessToken: true
      }
    }),
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: OAuthStorage, useFactory: storageFactory },
    { provide: AuthenticationService, useClass: OAuth2AuthenticationService },
    { provide: HTTP_INTERCEPTORS, useClass: TokenSenderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
