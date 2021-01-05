import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpTrialConfigService } from './http-trial-config-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TrialConfig } from '../model/trial-config';
import { of } from 'rxjs';


describe('HttpTrialConfigService', () => {
  let service: HttpTrialConfigService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.inject(HttpClient);
    spy = spyOn(httpClient, 'get').and.returnValue(of({} as TrialConfig));
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    service = TestBed.inject(HttpTrialConfigService);
    expect(service).toBeTruthy();
  });

  it('Should fetch the trial config', () => {
    service = TestBed.inject(HttpTrialConfigService);
    expect(spy).toHaveBeenCalled();
  });
});
