import { Component, OnInit } from '@angular/core';
import VersionsData from '../../../assets/versions.json';

@Component({
  selector: 'app-versions-view',
  templateUrl: './versions-view.component.html',
  styleUrls: ['./versions-view.component.sass']
})
export class VersionsViewComponent implements OnInit {

  public versions : any;

  constructor() {
    this.versions = VersionsData;
  }

  ngOnInit(): void {
  }
}

