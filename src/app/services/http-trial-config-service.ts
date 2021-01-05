import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TrialConfig } from '../model/trial-config';


@Injectable({
  providedIn: 'root'
})
export class HttpTrialConfigService implements TrialConfigService {
  private readonly trialConfig: Observable<TrialConfig>;

  constructor(private http: HttpClient) {
    this.trialConfig = this.http.get<TrialConfig>(environment.trialConfigApi).pipe(first());
  }

  getTrialConfig(): Observable<TrialConfig> {
    return this.trialConfig;
  }
}

export abstract class TrialConfigService {
  abstract getTrialConfig(): Observable<TrialConfig>;
}

export class MockTrialConfigService implements TrialConfigService {
  trialConfig = of({ trialName: 'trialName' } as TrialConfig);

  getTrialConfig(): Observable<TrialConfig> {
    return this.trialConfig;
  }
}
