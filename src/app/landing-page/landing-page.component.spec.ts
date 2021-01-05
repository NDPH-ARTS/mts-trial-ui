import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AuthenticationService, MockAuthenticationService } from '../services/oauth2-authentication.service';
import { MockTrialConfigService, TrialConfigService } from '../services/http-trial-config-service';

import { LandingPageComponent } from './landing-page.component';
import { of } from 'rxjs';
import { TrialConfig } from '../model/trial-config';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  const mockAuthenticationService = new MockAuthenticationService();
  const mockTrialConfigService = new MockTrialConfigService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LandingPageComponent,
      ],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthenticationService },
        { provide: TrialConfigService, useValue: mockTrialConfigService },
      ]
    })
      .compileComponents();
  });
  it('should create', () => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should request the trial config', () => {
    const trialConfig = of({ trialId: 'id', trialName: 'name' } as TrialConfig);
    const spy = spyOn(mockTrialConfigService, 'getTrialConfig').and.returnValue(trialConfig);
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should set trial name according to the trial config', () => {
    const trialConfig = of({ trialId: 'id', trialName: 'A test trial' } as TrialConfig);
    const spy = spyOn(mockTrialConfigService, 'getTrialConfig').and.returnValue(trialConfig);
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.trialName).toEqual('A test trial');
  });
});
