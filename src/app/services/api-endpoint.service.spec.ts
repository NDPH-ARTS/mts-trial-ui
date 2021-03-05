import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { ApiEndpointService } from './api-endpoint.service';

describe('API Endpoint Service', () => {
  let service: ApiEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(ApiEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialise endpoints correctly when supplied with a base url', () => {
      const baseUrl = 'localhost:9999';
      service.init(baseUrl);

      expect(service.profileEndpoint).toEqual(baseUrl + '/practitioner/profile');
  });

  it('should initialise to defaults when not supplied with a base url', () => {
    service.init('');

    const expected = environment.serviceUrls.find(u => u.service === 'practitionerService')?.url;

    expect(service.profileEndpoint).toEqual(expected + '/profile');
  });
});
