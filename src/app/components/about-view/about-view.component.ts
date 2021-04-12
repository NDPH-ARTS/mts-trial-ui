import { Component, OnInit } from '@angular/core';
import VersionsData from '../../../assets/versions.json';

@Component({
  selector: 'app-versions-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.sass']
})
export class AboutViewComponent implements OnInit {

  public versions : any;

  constructor() {
    this.versions = VersionsData;
  }

  ngOnInit(): void {
  }
}

