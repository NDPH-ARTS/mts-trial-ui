import { Component, OnInit } from '@angular/core';
import {first, take} from 'rxjs/operators';
import { RoleService } from '../services/role.service';
import { SiteService } from '../services/site.service';
import {Role} from '../model/role';
import {RoleAssignmentService} from '../services/role-assignment.service';
import {ProfileService} from '../services/profile.service';
import {Profile} from '../model/Profile';

@Component({
  selector: 'app-admin-roles',
  templateUrl: './admin-roles-page.component.html',
  styleUrls: ['./admin-roles-page.component.sass']
})
export class AdminRolesPageComponent implements OnInit {
  roles: any;
  sites: any;
  roleAssignments: any;
  profiles!: Profile[] ;
  constructor(private roleService: RoleService, private siteService: SiteService, private roleAssignmentService: RoleAssignmentService,
              private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getRoleAssignments();
    this.getSites();
    this.getRoles();
  }

  getSites(): void {
    this.siteService.getSites().pipe(first()).subscribe((sites) => {
      this.sites = sites;
    });
  }

  getRoles(): void {
    this.roleService.getRoles().pipe(first()).subscribe((roles) => {
      this.roles = roles;
    });
  }

  getRoleAssignments(): void {
    this.profileService.getProfiles().pipe(first()).subscribe ((profiles: Profile[]) => {
        for (const profile in profiles){
        if ( profiles[profile].id ) {
          this.roleAssignmentService.getRoleAssignments(profiles[profile].userAccountId).pipe(first()).subscribe((roleAssignments) => {
            this.roleAssignments = roleAssignments;
          });
        }
      }
    });
  }

  getSiteName(id: string): string {
    let siteName;
    for (const site in this.sites){
      if (id === this.sites[site].siteId) {
        siteName = this.sites[site].name;
      }
    }
    return siteName;
  }

  getRole(id: string): Role {
    let matchedrole;
    for (const role in this.roles){
      const roleid = this.roles[role].id;
      if (id === roleid) {
        matchedrole = this.roles[role];
      }
    }
    return matchedrole;
  }
}
