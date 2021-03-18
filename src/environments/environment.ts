// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  issuer: 'https://login.microsoftonline.com/5d23383f-2acb-448e-8353-4b4573b82276/v2.0',
  clientId: 'f352ce15-0142-4dfa-8e18-801ee6391557',
  trialName: 'mts-trial-ui',

  //  This URL is used during the PR UI test run; ensure that it points to
  //  a working environment during the PR process.
  //  This URL is overridden in the Azure deployment process
  gatewayUrl: 'https://as-liza48a-sc-gateway-dev.azurewebsites.net/api',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
