import { Component, Input } from '@angular/core';
import { Site } from 'src/app/model/site';

@Component({
  selector: 'app-sites-view',
  templateUrl: './sites-view.component.html',
  styleUrls: ['./sites-view.component.sass']
})
export class SitesViewComponent {
  @Input() sites: Site[] = [];

  constructor() { }
}
