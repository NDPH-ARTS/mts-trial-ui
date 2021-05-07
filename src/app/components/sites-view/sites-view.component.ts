import { Component, Input } from '@angular/core';
import { Site } from 'src/app/model/site';
import {SiteName} from '../../model/siteName';

@Component({
  selector: 'app-sites-view',
  templateUrl: './sites-view.component.html',
  styleUrls: ['./sites-view.component.sass']
})
export class SitesViewComponent {
  @Input() sites: SiteName[] = [];

  constructor() { }
}
