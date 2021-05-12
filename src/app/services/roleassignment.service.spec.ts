import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RoleAssignmentService} from './role-assignment.service';
import {RoleAssignment} from '../model/roleAssignment';

describe('RoleAssignmentService', () => {
  let service: RoleAssignmentService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RoleAssignmentService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RoleAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getRoleAssignments', () => {
    it('should return an Observable<RoleAssignment[]>', () => {
      const url = service.serviceUrl + '?userIdentity=dummy-oid';
      const roleAssignments = [
        {
          roleId: 'id',
          siteId: 'sid'
        } as RoleAssignment,
        {
          roleId: 'another id',
          siteId: 'an siteid'
        } as RoleAssignment
      ];

      service.getRoleAssignments('dummy-oid').subscribe(s => {
        console.log(s);
        expect(s.length).toBe(2);
        expect(s).toEqual(roleAssignments);
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(roleAssignments);
    });

    it('should handle errors calling the backend', () => {
      const response = { status: 500, statusText: 'Server error' };
      const url = service.serviceUrl + '?userIdentity=dummy-oid';

      service.getRoleAssignments('dummy-oid').subscribe(() => {}, (e) => {
        expect(e).toBe('Error getting profile data.');
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush('', response);
    });

    it('should handle error events calling the backend', () => {
      const response = { status: 500, statusText: 'Server error' };
      const url = service.serviceUrl + '?userIdentity=dummy-oid';

      service.getRoleAssignments('dummy-oid').subscribe(() => {}, (e) => {
        expect(e).toBe('Error getting profile data.');
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.error(new ErrorEvent('Error'));
    });
  });
});
