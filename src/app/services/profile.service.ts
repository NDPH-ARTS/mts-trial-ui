import { Injectable } from '@angular/core';
import {Profile} from '../model/Profile';
import {Observable, of, EMPTY, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigurationService } from './configuration-service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  readonly profileUrl = `${this.configurationService.gatewayUrl}/practitioner/profile`;

  constructor(private http: HttpClient, private configurationService: ConfigurationService) { }

  getProfiles(): Observable <Profile[]> {
    return this.http.get<Profile[]>(this.profileUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }

    return throwError('Error getting profile data.');
  }
}
