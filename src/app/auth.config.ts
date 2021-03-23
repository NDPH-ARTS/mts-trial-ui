import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

export const authConfigStandard: AuthConfig = {
  issuer: environment.issuer,
  redirectUri: window.location.origin + '/',
  clientId: environment.clientId,
  responseType: 'code',
  oidc: true,
  strictDiscoveryDocumentValidation: false,
  scope: 'openid profile email offline_access User.Read',
};

export const authConfigESig: AuthConfig = {
  issuer: environment.issuer,
  redirectUri: window.location.origin + '/',
  clientId: environment.clientId,
  responseType: 'code',
  oidc: true,
  strictDiscoveryDocumentValidation: false,
  scope: 'openid profile api://mts-dev/e-signature',
  customQueryParams : {
    prompt : 'login'
  }
};
