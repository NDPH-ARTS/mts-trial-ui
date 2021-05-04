import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { SiteService } from '../services/site.service';
import { MockSiteService } from '../services/site.service.mock';
import { Site } from '../model/site';

import { AdminSitesPageComponent } from './admin-sites-page.component';

describe('AdminSitesPageComponent', () => {
  let component: AdminSitesPageComponent;
  let fixture: ComponentFixture<AdminSitesPageComponent>;
  let siteService: SiteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSitesPageComponent ],
      providers: [
        { provide: SiteService, useClass: MockSiteService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSitesPageComponent);
    component = fixture.componentInstance;
    siteService = TestBed.inject(SiteService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch admin sites on init', fakeAsync(() => {

    const site: Site =
      {name: '', alias: '', siteId: '123', parentSiteId: '456', parentSiteName: '', siteType: '', description: '',
        lastUpdated: '', status: ''};
    const sites: Site[] = [site];

    const adminSiteSpy = spyOn(siteService, 'getSitesByRole').withArgs('admin').and.returnValue(of(sites));
    const siteWithIdSpy = spyOn(siteService, 'getSite').withArgs(site.parentSiteId).and.returnValue(of({} as Site));

    component.ngOnInit();
    tick();
    fixture.detectChanges();

    expect(adminSiteSpy).toHaveBeenCalled();
    expect(siteWithIdSpy).toHaveBeenCalled();
  }));
});
