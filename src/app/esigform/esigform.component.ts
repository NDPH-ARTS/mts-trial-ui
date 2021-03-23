import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/oauth2-authentication.service";

@Component({
  selector: 'app-esigform',
  templateUrl: './esigform.component.html',
  styleUrls: ['./esigform.component.sass']
})
export class EsigformComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
