import { ElementRef, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  trialName = '--trial name--';
  gatewayUrl = '--not-gateway--';
  clientId = '--clientId--';
  issuer = '--issuer--';

  constructor() { }

  // get an attribute from the appRoot, defaulting to the property in env if none
  private static retrieveAttr<T, K extends keyof T>(attrName: K, env: T, appRoot: ElementRef): T[K] {
    const attrValue = appRoot.nativeElement.getAttribute(attrName);
    if (attrValue != null && attrValue.length > 0
      && attrValue.indexOf('{{') !== 0) {
      return attrValue;
    } else {
      return env[attrName];
    }
  }

  init(appRoot: ElementRef): void {
    this.trialName = ConfigurationService.retrieveAttr('trialName', environment, appRoot);
    this.gatewayUrl = ConfigurationService.retrieveAttr('gatewayUrl', environment, appRoot);
    this.clientId = ConfigurationService.retrieveAttr('clientId', environment, appRoot);
    this.issuer = ConfigurationService.retrieveAttr('issuer', environment, appRoot);
  }
}

@Injectable({
  providedIn: 'root'
})
export abstract class IConfigurationService {
  abstract init(): void;
}
