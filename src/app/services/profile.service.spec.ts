import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getProfiles', () => {
    it('should return an Observable<Profile[]>', () => {
      const dummyOid = 'dummy-oid';
      const dummyProfiles = [
        { id: 'dummy-staff-id', givenName: 'Dummy', familyName: 'Dummington', prefix: 'Mr', userAccountId : dummyOid  }
      ];

      service.getProfiles().subscribe(profiles => {
        expect(profiles.length).toBe(1);
        expect(profiles).toEqual(dummyProfiles);
      });

      const req = httpMock.expectOne(service.profileUrl);
      expect(req.request.method).toBe('GET');
      req.flush(dummyProfiles);
    });

    it('should handle errors calling the backend', () => {
      const response = { status: 500, statusText: 'Server error' };

      service.getProfiles().subscribe(() => {}, (e) => {
        expect(e).toBe('Error getting profile data.');
      });

      const req = httpMock.expectOne(service.profileUrl);
      expect(req.request.method).toBe('GET');
      req.flush('', response);
    });

    it('should handle error events calling the backend', () => {
      const response = { status: 500, statusText: 'Server error' };

      service.getProfiles().subscribe(() => {}, (e) => {
        expect(e).toBe('Error getting profile data.');
      });

      const req = httpMock.expectOne(service.profileUrl);
      expect(req.request.method).toBe('GET');
      req.error(new ErrorEvent('Badthings'));
    });
  });
});
