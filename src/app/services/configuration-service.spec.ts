import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { ConfigurationService } from './configuration-service';

describe('ConfigurationService', () => {
  let service: ConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(ConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialise correctly when app root config is present', () => {
      const mockElement = { getAttribute: (atttribute: string) => atttribute};
      const issuer = 'fake-issuer';
      const clientId = 'fake-client';
      const trialName = 'trialName';
      const gateway = 'gateway';

      spyOn(mockElement, 'getAttribute')
        .withArgs('issuer').and.returnValue(issuer)
        .withArgs('clientId').and.returnValue(clientId)
        .withArgs('trialName').and.returnValue(trialName)
        .withArgs('gatewayUrl').and.returnValue(gateway);

      service.init(new ElementRef(mockElement));

      expect(service.issuer).toEqual(issuer);
      expect(service.clientId).toEqual(clientId);
      expect(service.trialName).toEqual(trialName);
      expect(service.gatewayUrl).toEqual(gateway);
    });
});
