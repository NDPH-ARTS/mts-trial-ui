import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { AdminSitesPageComponent } from './admin-sites-page/admin-sites-page.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { NgMaterialMultilevelMenuModule, MultilevelMenuService } from 'ng-material-multilevel-menu';

export const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http);
export const storageFactory = () => localStorage;
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AssignedSitesPageComponent,
    AdminSitesPageComponent,
    SitesViewComponent,
    AboutViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [''],
        sendAccessToken: true
      }
    }),
    NgbModule,
    BrowserAnimationsModule,
    NgMaterialMultilevelMenuModule,
  ],
  providers: [
    { provide: OAuthStorage, useFactory: storageFactory },
    { provide: AuthenticationService, useClass: OAuth2AuthenticationService },
    { provide: HTTP_INTERCEPTORS, useClass: TokenSenderInterceptor, multi: true },
    { provide: MultilevelMenuService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
