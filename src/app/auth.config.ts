import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

export const authConfig: AuthConfig = {
  issuer: `https://login.microsoftonline.com/${environment.tenantId}/v2.0`,
  redirectUri: window.location.origin + '/',
  clientId: `${environment.clientId}`,
  responseType: 'code',
  oidc: true,
  strictDiscoveryDocumentValidation: false,
  scope: 'openid profile email offline_access User.Read',
};
