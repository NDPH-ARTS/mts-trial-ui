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
      this.serviceEndpoints.practitionerService = gatewayUrl + '/practitioner-service';
      this.serviceEndpoints.roleService = gatewayUrl + '/role-service';
      this.serviceEndpoints.siteService = gatewayUrl + '/site-service';
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
