import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { SiteService } from '../services/site.service';
import { RoleService } from '../services/role.service';
import {RoleAssignmentService} from '../services/role-assignment.service';
import {ProfileService} from '../services/profile.service';
import { MockSiteService } from '../services/site.service.mock';
import { MockRoleService } from '../services/role.service.mock';
import { MockProfileService } from '../services/profile.service.mock';
import { MockRoleAssignmentService } from '../services/role-assignment.service.mock';
import { MockAuthenticationService } from '../services/oauth2-authentication.mock';
import { Site } from '../model/site';
import {AdminRolesPageComponent} from './admin-roles-page.component';
import {RoleAssignment} from '../model/roleAssignment';
import {Profile} from '../model/Profile';
import {Role} from '../model/role';
import {Permission} from '../model/permission';
import {AuthenticationService} from '../services/oauth2-authentication.service';


describe('AdminRolesPageComponent', () => {
  let component: AdminRolesPageComponent;
  let fixture: ComponentFixture<AdminRolesPageComponent>;
  let siteService: SiteService;
  let roleService: RoleService;
  let roleAssignmentService: RoleAssignmentService;
  let profileService: ProfileService;
  const mockAuthenticationService = new MockAuthenticationService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRolesPageComponent ],
      providers: [
        { provide: SiteService, useClass: MockSiteService },
        { provide: RoleService, useClass: MockRoleService },
        { provide: ProfileService, useClass: MockProfileService },
        { provide: AuthenticationService, useValue: mockAuthenticationService },
        { provide: RoleAssignmentService, useClass: MockRoleAssignmentService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRolesPageComponent);
    component = fixture.componentInstance;
    siteService = TestBed.inject(SiteService);
    roleService = TestBed.inject(RoleService);
    profileService = TestBed.inject(ProfileService);
    roleAssignmentService = TestBed.inject(RoleAssignmentService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch profile on init', () => {
    const profile: Profile =
      {id: 'x', givenName: 'x', userAccountId: 'x', familyName: 'x', prefix: 'x'};
    const profiles: Profile[] = [profile];

    const profileSpy = spyOn(profileService, 'getProfiles').and.returnValue(of([]));
    component.getRoleAssignments();

    expect(profileSpy).toHaveBeenCalled();
  });

  it('should fetch sites on init', () => {

    const site: Site =
      {name: '', alias: '', siteId: '123', parentSiteId: '456', parentSiteName: 'parent', siteType: '', description: '',
        lastUpdated: '', status: ''};
    const sites: Site[] = [site];

    const siteSpy = spyOn(siteService, 'getSites').and.returnValue(of([]));
    component.getSites();

    expect(siteSpy).toHaveBeenCalled();

  });

  it('should fetch roles on init', () => {
    const permission: Permission = {id: 'x'};
    const permissions: Array<Permission> = [permission];

    const role: Role =
      {id: 'x', permissions};

    const roles: Role[] = [role];

    const roleSpy = spyOn(roleService, 'getRoles').and.returnValue(of([]));
    component.getRoles();

    expect(roleSpy).toHaveBeenCalled();
  });

  it('should fetch role assignments', () => {
    const dummyOid = 'dummy-oid';
    const dummyProfiles = [
      { id: 'dummy-staff-id', givenName: 'Dummy', familyName: 'Dummington', prefix: 'Mr', userAccountId : dummyOid  }
    ];
    const roleAssignment: RoleAssignment =
      {roleId: 'x', siteId: 'x'};

    const roleAssignments: RoleAssignment[] = [roleAssignment];

    const profileSpy = spyOn(profileService, 'getProfiles').and.returnValue(of(dummyProfiles));
    const roleAssignmentSpy = spyOn(roleAssignmentService, 'getRoleAssignments').withArgs(dummyOid)
      .and.returnValue(of(roleAssignments));
    component.getRoleAssignments();

    expect(profileSpy).toHaveBeenCalled();
    expect(roleAssignmentSpy).toHaveBeenCalled();
  });
});
