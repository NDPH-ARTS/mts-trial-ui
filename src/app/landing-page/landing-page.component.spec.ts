import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AuthenticationService, MockAuthenticationService } from '../services/oauth2-authentication.service';
import { LandingPageComponent } from './landing-page.component';
import { of } from 'rxjs';
import {MockProfileService, ProfileService} from "../services/profile.service";

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
});
