import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ProfileService } from './profile.service';
import {RoleService} from './role.service';
import {Role} from '../model/role';
import {Permission} from '../model/permission';

describe('RoleService', () => {
  let service: RoleService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getRoles', () => {
    it('should return an Observable<Role[]>', () => {
      const permission: Permission = {id: 'x'};
      const permissions: Array<Permission> = [permission];
      const roles = [
        {
          id: 'id',
          permissions
        } as Role,
        {
          id: 'another id',
          permissions
        } as Role,
      ];

      service.getRoles().subscribe(s => {
        console.log(s);
        expect(s.length).toBe(2);
        expect(s).toEqual(roles);
      });

      const req = httpMock.expectOne(service.serviceUrl);
      expect(req.request.method).toBe('GET');
      req.flush(roles);
    });

    it('should handle errors calling the backend', () => {
      const response = { status: 500, statusText: 'Server error' };

      service.getRoles().subscribe(() => {}, (e) => {
        expect(e).toBe('Error getting profile data.');
      });

      const req = httpMock.expectOne(service.serviceUrl);
      expect(req.request.method).toBe('GET');
      req.flush('', response);
    });

    it('should handle error events calling the backend', () => {
      const response = { status: 500, statusText: 'Server error' };

      service.getRoles().subscribe(() => {}, (e) => {
        expect(e).toBe('Error getting profile data.');
      });

      const req = httpMock.expectOne(service.serviceUrl);
      expect(req.request.method).toBe('GET');
      req.error(new ErrorEvent('Error'));
    });
  });
});
