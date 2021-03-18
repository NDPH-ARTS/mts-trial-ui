import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Site } from 'src/app/model/site';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-sites-view',
  templateUrl: './sites-view.component.html',
  styleUrls: ['./sites-view.component.sass']
})
export class SitesViewComponent implements OnInit {
  @Input() sites: Site[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
