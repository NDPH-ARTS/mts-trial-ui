import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ProfileService } from './profile.service';
import { Site } from '../model/site';
import { SiteService } from './site.service';

describe('SiteService', () => {
  let service: SiteService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getSites', () => {
    it('should return an Observable<Site[]>', () => {
      const sites = [
        {
          name: 'name',
          alias: 'alias',
          siteId: 'siteId',
          parentSiteId: 'parentSiteId',
          parentSiteName: 'parentSiteName',
          siteType: 'siteType'
        } as Site,
        {
          name: 'another site',
          alias: 'alias2',
          siteId: 'siteId2',
          parentSiteId: 'parentSiteId',
          parentSiteName: 'parentSiteName',
          siteType: 'anotherType'
        } as Site,
      ];

      service.getSites().subscribe(s => {
        console.log(s)
        expect(s.length).toBe(2);
        expect(s).toEqual(sites);
      });

      const req = httpMock.expectOne(service.serviceUrl);
      expect(req.request.method).toBe('GET');
      req.flush(sites);
    });

    it('should handle errors calling the backend', () => {
      const response = { status: 500, statusText: 'Server error' };

      service.getSites().subscribe(() => {}, (e) => {
        expect(e).toBe('Error getting profile data.');
      });

      const req = httpMock.expectOne(service.serviceUrl);
      expect(req.request.method).toBe('GET');
      req.flush('', response);
    });

    it('should handle error events calling the backend', () => {
      const response = { status: 500, statusText: 'Server error' };

      service.getSites().subscribe(() => {}, (e) => {
        expect(e).toBe('Error getting profile data.');
      });

      const req = httpMock.expectOne(service.serviceUrl);
      expect(req.request.method).toBe('GET');
      req.error(new ErrorEvent('Error'));
    });
  });
});
