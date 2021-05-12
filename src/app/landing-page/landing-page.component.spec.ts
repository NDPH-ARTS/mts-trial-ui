import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of, throwError } from 'rxjs';
import { Profile } from '../model/Profile';
import { MockAuthenticationService } from '../services/oauth2-authentication.mock';
import { AuthenticationService } from '../services/oauth2-authentication.service';
import { ProfileService } from '../services/profile.service';
import { MockProfileService } from '../services/profile.service.mock';
import { LandingPageComponent, State } from './landing-page.component';
import {Site} from '../model/site';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  const mockAuthenticationService = new MockAuthenticationService();
  const mockProfileService = new MockProfileService();

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
        { provide: ProfileService, useValue: mockProfileService },
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

  it('should handle errors from ProfileService', () => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    spyOn(mockProfileService, 'getProfiles').and.callFake(() => throwError('Error'));
    fixture.detectChanges();


    expect(component.profilesState).toBe(State.failed);
  });

  it('should set profileState correctly on successful profile retrieval', () => {
    spyOn(mockProfileService, 'getProfiles').and.returnValue(of([{} as Profile]));
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


    expect(component.profilesState).toBe(State.success);
  });

  it('should fetch profiles', () => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    const profile: Profile =
      {id: '', givenName: '', familyName: '123', prefix: '456', userAccountId: 'parent'};
    const profiles: Profile[] = [profile];

    const profileSpy = spyOn(mockProfileService, 'getProfiles').and.returnValue(of(profiles));
    component.showProfiles();

    expect(profileSpy).toHaveBeenCalled();
  });
});
