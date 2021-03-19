import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-assigned-sites',
  templateUrl: './assigned-sites-page.component.html',
  styleUrls: ['./assigned-sites-page.component.sass']
})
export class AssignedSitesPageComponent implements OnInit {
  sites: any;

  constructor(private siteService: SiteService) { }

  ngOnInit(): void {
    this.siteService.getSites().pipe(first()).subscribe((sites) => {
      this.sites = sites.sort();
    });
  }
}
