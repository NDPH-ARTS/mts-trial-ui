import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-versions-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.sass']
})
export class AboutViewComponent implements OnInit {

  public versions : any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(){
    this.httpClient.get('assets/versions.json').subscribe(data =>{
      console.log(data);
      this.versions = data;
    })
  }
}

