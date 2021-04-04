import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

export const authConfig: AuthConfig = {
  issuer: environment.issuer,
  redirectUri: window.location.origin + '/',
  clientId: environment.clientId,
  responseType: 'code',
  oidc: true,
  strictDiscoveryDocumentValidation: false,
  scope: 'api://fa5cde1d-d6f8-4d13-9fa4-4d7a374cb290/default',
};
