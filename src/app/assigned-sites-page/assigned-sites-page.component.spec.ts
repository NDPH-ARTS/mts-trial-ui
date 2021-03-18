import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SiteService } from '../services/site.service';
import { MockSiteService } from '../services/site.service.mock';

import { AssignedSitesPageComponent } from './assigned-sites-page.component';

describe('AssignedSitesPageComponent', () => {
  let component: AssignedSitesPageComponent;
  let fixture: ComponentFixture<AssignedSitesPageComponent>;
  let siteService: SiteService;

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
    siteService = TestBed.inject(SiteService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch assigned sites on init', () => {
    const spy = spyOn(siteService, 'getSites').and.returnValue(of([]));

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });
});
