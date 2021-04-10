import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { SiteService } from '../services/site.service';
import {Site} from '../model/site';

@Component({
  selector: 'app-admin-sites',
  templateUrl: './admin-sites-page.component.html',
  styleUrls: ['./admin-sites-page.component.sass']
})
export class AdminSitesPageComponent implements OnInit {
  sites: any;
  selectedSite: Site;
  showModal: boolean;

  constructor(private siteService: SiteService) { }

  ngOnInit(): void {
    this.showModal = false;
    this.selectedSite = {};
    this.siteService.getSitesByRole('admin').pipe(first()).subscribe((sites) => {
      sites.forEach(site => {
        if (site.parentSiteId != null) {
          this.siteService.getSite(site.parentSiteId).subscribe((retSite: Site) => {
            site.parentSiteName = retSite.name;
          });
        }
      });
      this.sites = sites.sort();
    });
  }

  openModal(site: Site): void {
    this.selectedSite = site;
    this.showModal = true;
  }

  hide(): void {
    this.showModal = false;
  }
}
