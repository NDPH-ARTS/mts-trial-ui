import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Site } from 'src/app/model/site';
import { SiteService } from 'src/app/services/site.service';
import { MockSiteService } from 'src/app/services/site.service.mock';

import { SitesViewComponent } from './sites-view.component';

describe('SitesViewComponent', () => {
  let component: SitesViewComponent;
  let siteService: SiteService;
  let fixture: ComponentFixture<SitesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesViewComponent ],
      providers: [
        { provide: SiteService, useClass: MockSiteService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesViewComponent);
    component = fixture.componentInstance;
    siteService = TestBed.inject(SiteService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
