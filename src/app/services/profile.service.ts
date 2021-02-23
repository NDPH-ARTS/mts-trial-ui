import { Injectable } from '@angular/core';
import {Profile} from "../model/Profile";
import { Observable, of, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly profileUrl = 'http://localhost:8081/practitioner/profile'; // temp. Inject this in task 549

  constructor(private http: HttpClient) { }

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
    return EMPTY;
  }
}

export class MockProfileService {
  getProfiles(): Observable <Profile[]> {
    let mockProfiles : Profile[] = [];
    return of(mockProfiles);
  }
}
