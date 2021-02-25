import { Injectable } from '@angular/core';
import {Profile} from "../model/Profile";
import {Observable, of, EMPTY, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {ApiEndpointService} from "./api-endpoint.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  //readonly profileUrl = 'http://localhost:8081/practitioner/profile'; // temp. Inject this in task 549
  readonly profileUrl = this.endpoints.profileEndpoint;

  constructor(private http: HttpClient, private endpoints: ApiEndpointService) { }

  getProfiles(): Observable <Profile[]> {
    return this.http.get<Profile[]>(this.profileUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError("Error getting profile data.");
  }
}

export class MockProfileService {
  getProfiles(): Observable <Profile[]> {
    let mockProfiles : Profile[] = [];
    return of(mockProfiles);
  }
}
