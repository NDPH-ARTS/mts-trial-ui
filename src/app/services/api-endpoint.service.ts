import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointService {

  private serviceEndpoints: { [key: string]: string } =  {
    practitionerService: '',
    roleService: '',
    siteService: ''
  };

  constructor() {
  }

  init(gatewayUrl: string): void {
    if (gatewayUrl != null && gatewayUrl.length > 0) {
      this.serviceEndpoints.practitionerService = gatewayUrl + '/practitioner';
      this.serviceEndpoints.roleService = gatewayUrl + '/roles';
      this.serviceEndpoints.siteService = gatewayUrl + '/sites';
    } else {
      environment.serviceUrls.forEach(e => {
        this.serviceEndpoints[e.service] = e.url;
      });
    }
  }

  get profileEndpoint(): string {
    return this.serviceEndpoints.practitionerService +  '/profile';
  }

}
