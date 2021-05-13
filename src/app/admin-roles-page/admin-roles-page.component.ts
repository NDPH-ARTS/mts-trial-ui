import { Component, OnInit } from '@angular/core';
import {first, mergeAll, mergeMap, share, switchMap, tap, concatMap, map, take} from 'rxjs/operators';
import {forkJoin, from, Observable} from 'rxjs';
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
    this.profileService.getProfiles().pipe(map(
      res => this.roleAssignmentService.getRoleAssignments(res[0].userAccountId).pipe(take(1)).subscribe((roleAssignments) => {
        this.roleAssignments = roleAssignments;
      }))).subscribe(
    );
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