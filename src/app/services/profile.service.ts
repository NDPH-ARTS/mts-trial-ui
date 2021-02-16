import { Injectable } from '@angular/core';
import {Profile} from "../model/Profile";
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileUrl = 'http://localhost:8081/practitioner/profile/'; // temp. Inject this in task 549

  constructor(private http: HttpClient) { }

  getProfile(oid: String): Observable <Profile> {
    return this.http.get<Profile>(this.profileUrl+oid)
  }


}
