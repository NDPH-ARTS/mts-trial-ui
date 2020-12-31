import { TestBed } from '@angular/core/testing';

import { TrialConfigService } from './trial-config.service';

describe('TrialConfigService', () => {
  let service: TrialConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrialConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
