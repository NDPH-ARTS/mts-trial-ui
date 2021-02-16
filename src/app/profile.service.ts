import { Injectable } from '@angular/core';
import {Profile} from "./Profile";
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileUrl = 'http://localhost:8081/practitioner/profile'; // temp. Inject this in task 549

  constructor(private http: HttpClient) { }

  getProfile(): Observable <Profile> {
    return this.http.get<Profile>(this.profileUrl)
  }


  private mockProfile : Profile = {
    id : 'mock-id-123',
    familyName : 'Family name goes here',
    givenName : 'Given name goes here',
    prefix : 'Prefix goes here'
  }
}
