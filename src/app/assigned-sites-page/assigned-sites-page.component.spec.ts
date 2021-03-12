import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteService } from '../services/site.service';
import { MockSiteService } from '../services/site.service.mock';

import { AssignedSitesPageComponent } from './assigned-sites-page.component';

describe('AssignedSitesPageComponent', () => {
  let component: AssignedSitesPageComponent;
  let fixture: ComponentFixture<AssignedSitesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedSitesPageComponent ],
      providers: [
        { provide: SiteService, useClass: MockSiteService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedSitesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
